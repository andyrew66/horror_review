import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isOpen = false;
  categories: string[] = [];  // Declare categories
  isMobileView: boolean = window.innerWidth <= 768; // or any other breakpoint you prefer

  // Add menuItems to manage submenus
  menuItems = [
    { name: 'Home', hasSubmenu: false },
    { name: '+ Genre', hasSubmenu: true },
    // Add more items here
  ];

  showSubmenu: { [key: string]: boolean } = {};

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    // Simulating fetching categories from a database
    this.categories = ['Horror', 'Thriller', 'Mystery', 'Sci-Fi'];
    this.sharedService.toggleSidebar.subscribe(() => this.toggleSidebar());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileView = window.innerWidth <= 768;
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleSubmenu(name: string): void {
    this.showSubmenu[name] = !this.showSubmenu[name];
  }
}
