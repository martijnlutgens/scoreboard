import { Component } from '@angular/core';
import { Game } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  game: Game;
  showWinText = false;
  winText = 'Speler 1';
  useable = true;
  reset = 'Reset';
  winner = 0;


  constructor() {
    this.game = this.newGame();
  }

  newGame() {
    return {
      player1: {
        score: 0,
        sets: 0
      },
      player2: {
        score: 0,
        sets: 0
      }
    };
  }

  add(selectedPlayer: number) {
    if (this.showWinText || this.useable === false) {
      return;
    }
    let player = selectedPlayer === 1 ? this.game.player1 : this.game.player2;
    let opponent = selectedPlayer === 1 ? this.game.player2 : this.game.player1;
    if (player.score < 999) {
      player.score++;
    }
    if (player.score > 10 && player.score > (opponent.score + 1)) {
      if (player.sets === 2) {
        player.sets++;
        this.winText = `Speler ${selectedPlayer} heeft gewonnen!`;
        this.showWinText = true;
        this.winner = selectedPlayer;
        this.useable = false;
        this.reset = 'Opnieuw spelen';
        setTimeout(() => {
          this.showWinText = false
        }, 10000);
      } else {
        this.winText = `Set voor speler ${selectedPlayer}`;
        this.winner = selectedPlayer;
        this.showWinText = true;
        player.sets++;
        this.reset = 'Volgende set'
      }
    }
  }


  min(selectedPlayer: number) {
    let player = selectedPlayer === 1 ? this.game.player1 : this.game.player2;
    let opponent = selectedPlayer === 1 ? this.game.player2 : this.game.player1;
    if (this.winner === 0) {
      if (player.score > 0) {
        this.reset = 'Reset'
        this.showWinText = false
        this.useable = true
        player.score--;
      }
    } else {
      if (selectedPlayer === this.winner) {
        player.sets--;
        player.score--;
        this.winner = 0;
        this.useable = true;
        this.showWinText = false;
      } else {
        if ((selectedPlayer === this.winner) === false)
          return
      }
    }
  }

  resetNext() {
    if (this.reset === 'Reset') {
      this.game = this.newGame();
      this.showWinText = false;
      this.useable = true
    }
    if (this.reset === 'Volgende set') {
      this.useable = true;
      this.game.player1.score = 0;
      this.game.player2.score = 0;
      this.showWinText = false;
      this.reset = 'Reset'
    }
    if (this.reset === 'Opnieuw spelen') {
      this.game = this.newGame();
      this.showWinText = false;
      this.useable = true;
      this.reset = 'Reset'
    }
  }
}