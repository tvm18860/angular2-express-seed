import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  activeLinkIndex = 0;
  tabLinks = [
    { label: 'Home', link: 'home' },
    { label: 'Data', link: 'data' }
  ]

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationError) {
        console.log("Navigation error: ", event);
      }
      // On successful route change, highlight the correct top level tab
      else if(event instanceof NavigationEnd) {
        this.activeLinkIndex = this.tabLinks.findIndex(routedTab => event.url.indexOf(routedTab.link) != -1);
      }
    })
  }

}
