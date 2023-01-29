import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false
}
