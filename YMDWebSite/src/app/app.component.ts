import { Component,OnInit } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { Router, Scroll, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0,0]);;
  }
  
  title = 'YMDWebSite';
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
constructor(private loc: Location, private router: Router, private viewportScroller: ViewportScroller) {
  this.router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) => {

    setTimeout(() => {
      if (e.position) {
        this.viewportScroller.scrollToPosition(e.position);
      } else if (e.anchor) {
        this.viewportScroller.scrollToAnchor(e.anchor);
      } else {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  });
  
}

}