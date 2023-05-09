import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss'],
})
export class ScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  changeLocation(value: string){
    const point = document.getElementById('point')
    const screen = document.getElementById('screen')
    const bondPointLimit = point.getBoundingClientRect();
    const bondLimit = screen.getBoundingClientRect();
    const jump = 10;
    switch (value) {
    case 'up':
      if (bondPointLimit.top - jump >= bondLimit.top){
        point.style.top =  point.offsetTop - jump + 'px';
      }
      break;
    case 'down':
      if (bondPointLimit.bottom + jump <=  bondLimit.height){
        point.style.top = point.offsetTop + jump + 'px';
      }
      break;
    case 'back':
      if (bondPointLimit.left -jump >= bondLimit.left){
        point.style.left = point.offsetLeft - jump + 'px';
      }
      break;
    case 'forward':
      if (bondPointLimit.right + jump <= bondLimit.right){
        point.style.left = point.offsetLeft + jump + 'px';
      }
      break;
    case 'reset':
      point.style.top = 325 + 'px';
      point.style.left = 300 + 'px';
      break;
    default:
      break;
    }
  }
}
