import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isOpen = false;
  categories: string[] = [];  // Declare categories
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    // Simulating fetching categories from a database
    this.categories = ['Horror', 'Thriller', 'Mystery', 'Sci-Fi'];
    this.sharedService.toggleSidebar.subscribe(() => this.toggleSidebar());
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
