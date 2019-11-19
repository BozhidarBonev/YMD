import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  title = 'grid-list';

  isHovered: boolean = false;
  isCollapsed1: boolean = true;
  isCollapsed2: boolean = true;

  hover1() {
    this.isHovered = true;
  }
  toggleCollapse1() {
    this.isCollapsed1 = !this.isCollapsed1;
  }
  toggleCollapse2() {
    this.isCollapsed2 = !this.isCollapsed2;
  }
  constructor() { }
  ngOnInit() {
  }
}
