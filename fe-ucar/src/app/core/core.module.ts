import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { NgZorroIconModule } from './ng-zorro-icon/ng-zorro-icon.module';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    NgZorroModule,
    NgZorroIconModule,
    RouterModule
  ],
  exports: [
    NgZorroModule,
    NgZorroIconModule
  ]
})
export class CoreModule { }
