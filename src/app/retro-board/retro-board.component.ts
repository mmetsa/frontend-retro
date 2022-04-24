import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-retro-board',
  templateUrl: './retro-board.component.html',
  styleUrls: ['./retro-board.component.css', '../app.component.css']
})
export class RetroBoardComponent implements OnInit {

  joinActive: boolean = false;
  username = new FormControl(localStorage.getItem('username'), [Validators.required, Validators.minLength(1)]);
  boardId = new FormControl(undefined, [Validators.required, Validators.min(1)]);

  constructor(private router: Router) {

  }

  ngOnInit(): void {}

  toggleJoinActive(): void {
    this.joinActive = !this.joinActive;
  }

  joinBoard(): void {
    if (this.username.valid && this.boardId.valid) {
      localStorage.setItem('username', this.username.value);
      this.router.navigate(['/retro', this.boardId.value]);
    }
  }
}
