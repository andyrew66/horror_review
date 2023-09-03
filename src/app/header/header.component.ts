import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //constructor(private sidebarComponent: SidebarComponent) { }
 constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.sharedService.toggleSidebar.emit();
  }
}
