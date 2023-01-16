import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fibo=[1,1,2,3,5,8,13,21,34,55];
  selected = this.fibo[0];
  counter = 0;

  decrement(){
    if(this.counter <= 0) return;
    if(this.counter - this.selected<0) return;
    this.counter-=this.selected;
  }

  increment(){
    this.counter+=this.selected;
  }
}
