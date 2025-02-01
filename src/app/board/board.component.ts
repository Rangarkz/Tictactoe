import { Component } from '@angular/core';
import { SquareComponent } from "../square/square.component";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-board',
  imports: [SquareComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  squares: string[];
  winner='';

  constructor() {
    this.squares = Array(9).fill(null);
  }
  makeMove(idx: number) {
    this.squares.splice(idx, 1, this.player);
    console.log(this.squares);

    this.checkWinner();

  }
  checkWinner() {

    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        this.winner = this.squares[a];
      }
    }

  }
  get player() {
    if(this.squares.filter(s => s === 'X').length === this.squares.filter(s => s === 'O').length) {
      return 'X';
    } else {
      return 'O';
    }
  }
  restartGame() {
    this.squares = Array(9).fill(null);
    this.winner = '';
  }
}
