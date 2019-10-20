import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations: [
    trigger('enterPic',[
      state('initial', style({transform: 'translateX(0)',opacity:0})),
      state('final', style({transform: 'translateX(300)',opacity:1})),
      transition('initial=>final',animate(10000))
    ])

  ]
})
export class AboutusComponent implements OnInit {
    tiles: Tile[] = [
      {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    ];
    state="initial";
  constructor() { }

  ngOnInit() {
  }
  PicAnim(text:string){
    this.state = text;
  }
}
