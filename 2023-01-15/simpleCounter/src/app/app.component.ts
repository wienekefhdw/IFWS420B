import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;

  // Aktuelle Aufgabe: Keine negativen Counter Werte möglich
  // Pause bis : 11.50
  decrement(){
    // if(this.counter>0){
    //   this.counter--;
    // }

    if(this.counter==0) return;
    this.counter--;
  }

  increment(){
    this.counter++;
  }
}
