import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RetroBoardApiService} from "../retro-board/retro-board-api.service";
import {RetroBoard} from "./models/retro-board";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RetroBoardDetailApiService} from "./retro-board-detail-api.service";
import {ColumnItem} from "../retro-board/models/column-item";
import {Observable, interval, Subscription} from "rxjs";

@Component({
  selector: 'app-retro-board-detail',
  templateUrl: './retro-board-detail.component.html',
  styleUrls: ['./retro-board-detail.component.css', '../app.component.css']

})
export class RetroBoardDetailComponent implements OnInit, OnDestroy {

  id: number = 0;
  columnWidth: number = 12;
  board: RetroBoard | undefined;
  username: string | null = localStorage.getItem('username');
  interval: Subscription | undefined;
  upVotes: FormControl = new FormControl(0);
  downVotes: FormControl = new FormControl(0);

  textareas = new FormGroup({});

  constructor(private route: ActivatedRoute, private apiService: RetroBoardApiService,
              private detailApiService: RetroBoardDetailApiService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('username') === null) {
      this.username = prompt("What should we call you?", "Anonymous")
      localStorage.setItem('username', this.username!);
    }
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadBoard(this.id);
      this.interval = interval(30000).subscribe(() => {
        this.loadBoard(this.id);
      })
    });
  }

  ngOnDestroy() {
    this.interval?.unsubscribe();
  }

  loadBoard(id: number): any {
    this.apiService.getBoard(id).subscribe((b: RetroBoard) => {
      this.board = b;
      for (let col of this.board.columns) {
        col.items.sort((a, b) => a.id - b.id);
      }
      this.columnWidth = 12 / this.board.columns.length;
      for (let x of this.board.columns) {
        this.textareas.addControl(x.name, new FormControl('', Validators.required));
      }
    });
  }

  addColumnItem(columnId: number, name: string) {
    let columnItem: ColumnItem = this.buildColumnItem(columnId, name);
    if (this.textareas.controls[name].valid) {
      this.detailApiService.addColumnItem(columnItem).subscribe(() => this.loadBoard(this.board?.id ?? 0));
      this.textareas.controls[name].reset()
    }
  }

  deleteColumnItem(itemId: number) {
    this.detailApiService.removeColumnItem(itemId).subscribe(() => this.loadBoard(this.board?.id ?? 0));
  }

  buildColumnItem(columnId: number, name: string): ColumnItem {
    return {
      columnId: columnId,
      boardId: this.board?.id ?? 0,
      value: this.textareas.controls[name].value,
      author: localStorage.getItem('username') ?? 'anonymous'
    }
  }

  addUpVote(itemId: number) {
    this.detailApiService.addUpVote(itemId).subscribe(() => this.loadBoard(this.board?.id ?? 0));
  }

  addDownVote(itemId: number) {
    this.detailApiService.addDownVote(itemId).subscribe(() => this.loadBoard(this.board?.id ?? 0));
  }
}
