import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {MatChipInputEvent, MatChipList} from "@angular/material/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {RetroBoardApiService} from "./retro-board-api.service";

@Component({
  selector: 'app-retro-board',
  templateUrl: './retro-board.component.html',
  styleUrls: ['./retro-board.component.css', '../app.component.css']
})
export class RetroBoardComponent implements OnInit {

  joinActive: boolean = false;
  createActive: boolean = false;
  username = new FormControl(localStorage.getItem('username'), [Validators.required, Validators.minLength(1)]);
  boardId = new FormControl(undefined, [Validators.required, Validators.min(1)]);
  boardName = new FormControl('', Validators.required);
  teamName = new FormControl('', Validators.required);
  columns: string[] = ['Start', 'Stop', 'Continue'];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private router: Router, private apiService: RetroBoardApiService) {}

  addColumn(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    console.log("HERE")
    if (value) {
      this.columns.push(value);
    }
    event.chipInput!.clear();
  }

  removeColumn(value: string): void {
    const index = this.columns.indexOf(value);
    if (index >= 0) {
      this.columns.splice(index, 1);
    }
  }

  ngOnInit(): void {}

  toggleJoinActive(): void {
    this.joinActive = !this.joinActive;
  }

  toggleCreateActive(): void {
    this.createActive = !this.createActive;
  }

  joinBoard(): void {
    if (this.username.valid && this.boardId.valid) {
      localStorage.setItem('username', this.username.value);
      this.router.navigate(['/retro', this.boardId.value]);
    }
  }

  createBoard() {
    if (this.username.valid && this.boardName.valid && this.teamName.valid && this.columns.length > 0) {
      this.apiService.createBoard({
        name: this.boardName.value,
        teamName: this.teamName.value,
        columns: this.columns
      }).subscribe((id: number) => this.router.navigate(['/retro', id]));
    }
  }

  navigateToList(): void {
    this.router.navigate(['/list']);
  }
}
