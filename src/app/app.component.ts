import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  score1 = 0;
  score2 = 0;

  add1() {
    if(this.score1<999) {
      this.score1++;
    }
  }

  min1() {
    if(this.score1>0) {
      this.score1--;
    }
  }
  add2() {
    if(this.score2<999) {
      this.score2++;
    }
  }

  min2() {
    if(this.score2>0) {
      this.score2--;
    }
  }
}
