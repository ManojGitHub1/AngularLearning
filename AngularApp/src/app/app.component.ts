import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isAboutPage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // Subscribe to router events to track active route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Check if the active route is the "About" page
        this.isAboutPage = event.urlAfterRedirects.includes('/about');
      }
    });
  }
}
