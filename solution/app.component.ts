import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  startValue: number;
  height: number = 0;
  tower: string[][] = [];

  calculate() {
    this.tower = [];
    if (this.height >= 2 && this.startValue !== undefined && this.startValue !== null) {
      let currVal = this.startValue;
      for (let i = 2; i <= this.height; i++) {
        this.tower[i - 2] = [];
        this.tower[i - 2].push(currVal + " * " + i);
        this.tower[i - 2].push(" = ");
        this.tower[i - 2].push(currVal * i + "");
        currVal = currVal * i;
      }
      for (let i = 2; i <= this.height; i++) {
        this.tower[i+this.height - 2] = [];
        this.tower[i+this.height - 2].push(currVal + " / " + i);
        this.tower[i+this.height - 2].push(" = ");
        this.tower[i+this.height - 2].push(currVal / i + "");
        currVal = currVal / i;
      }
    }
  }
}

