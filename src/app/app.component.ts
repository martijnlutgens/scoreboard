import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  score1 = 0;
  score2 = 0;
  set1 = 0;
  set2 = 0;

  add1() {
    if (this.score1 < 999) {
      this.score1++;
      if (this.score1 > 10 && this.score1 > this.score2) {
        this.set1++;
        this.score1 = 0;
        this.score2 = 0;
      }
    }
  }

  min1() {
    if (this.score1 > 0) {
      this.score1--;
    }
  }
  add2() {
    if (this.score2 < 999) {
      this.score2++;
      if (this.score2 > 10 && this.score1 < this.score2) {
        this.set2++;
        this.score1 = 0;
        this.score2 = 0;
      }
    }
  }

  min2() {
    if (this.score2 > 0) {
      this.score2--;
    }
  }

  reset() {
    this.score1 = 0;
    this.score2 = 0;
    this.set1 = 0;
    this.set2 = 0;
  }
}
