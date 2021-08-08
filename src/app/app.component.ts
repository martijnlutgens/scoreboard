import { Component } from '@angular/core';
import { Game } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  game: Game;

  showSet = false;
  winText = 'Speler 1';

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
    if (this.showSet) {
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
        this.showSet = true
        setTimeout(() => {
          this.showSet = false
        }, 10000);
      } else {
        this.winText = `Set voor speler ${selectedPlayer}`;
        this.showSet = true;
        setTimeout(() => {
          player.sets++;
          player.score = 0;
          opponent.score = 0;
          this.showSet = false;
        }, 1500);
      }
    }
  }


  min(selectedPlayer: number) {
    let player = selectedPlayer === 1 ? this.game.player1 : this.game.player2;
    if (player.score > 0) {
      player.score--;
    }
  }

  reset() {
    this.game = this.newGame();
  }
}
