import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { NgZorroIconModule } from './ng-zorro-icon/ng-zorro-icon.module';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToggleLayoutComponent } from './components/toggle-layout/toggle-layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    ToggleLayoutComponent
  ],
  imports: [
    NgZorroModule,
    NgZorroIconModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    NgZorroModule,
    NgZorroIconModule
  ]
})
export class CoreModule { }
