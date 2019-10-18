import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  title = 'grid-list';
  isCollapsed:boolean=true;
  isCollapsed1:boolean=true;
  isCollapsed2:boolean=true;
  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed;
  }
  toggleCollapse1(){
    this.isCollapsed1=!this.isCollapsed1;
  }
  toggleCollapse2(){
    this.isCollapsed2=!this.isCollapsed2;
  }

  constructor() { }

  ngOnInit() {
  }

}
