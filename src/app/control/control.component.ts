import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  @Output()
  changeLocationEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
  }

  changeLocation(dir: string){
    this.changeLocationEvent.emit(dir);
  }
}
