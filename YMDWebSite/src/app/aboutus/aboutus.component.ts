import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
    tiles: Tile[] = [
      {text: 'One', cols: 2, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    ];
  constructor() { }

  ngOnInit() {
  }

}
