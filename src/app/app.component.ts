import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers = [];
  evenNumbers = [];

  onIntervalStarted(lastNumber){
    if(lastNumber % 2 === 0){
      this.evenNumbers.push(lastNumber);
    }else{
      this.oddNumbers.push(lastNumber);
    }
  }

  onResetArrays(){
    this.oddNumbers = [];
    this.evenNumbers = [];
  }

}
