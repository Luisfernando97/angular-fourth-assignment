import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {

  @Output() intervalStarted = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  delay = 1000;

  constructor() {}

  ngOnInit() {}

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalStarted.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, this.delay)
  }

  onPauseGame(){
    clearInterval(this.interval);
  }

  onResetGame(){
    this.lastNumber = 0;
  }

  onResetDelay(){
    this.delay = 1000;
  }

}
