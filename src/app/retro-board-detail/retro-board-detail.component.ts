import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RetroBoardApiService} from "./retro-board-api.service";
import {RetroBoard} from "./models/retro-board";

@Component({
  selector: 'app-retro-board-detail',
  templateUrl: './retro-board-detail.component.html',
  styleUrls: ['./retro-board-detail.component.css', '../app.component.css']

})
export class RetroBoardDetailComponent implements OnInit {

  id: number = 0;
  columnWidth: number = 12;
  board: RetroBoard | undefined;

  constructor(private route: ActivatedRoute, private apiService: RetroBoardApiService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadBoard(this.id);
    });
  }

  loadBoard(id: number): any {
    this.apiService.getBoard(id).subscribe((b: RetroBoard) => {
      this.board = b;
      this.columnWidth = 12 / this.board.columns.length;
      console.log(this.board);
    });
  }
}
