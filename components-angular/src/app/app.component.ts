import { Component } from '@angular/core';
import '../../public/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonTitle = "Initial";
  counter = 0;
  constructor() {
    setInterval(()=> {
      this.counter++;
      this.updateButtonTitle();
    }, 1000);
  }
  updateButtonTitle() {
    this.buttonTitle = "Button " + this.counter;
  }
  onButtonClick(args:any) {
    this.counter = 0;
    this.updateButtonTitle();
  }
  onClickedChanged(args:any) {
    console.log(args);
  }
}
