import { ModuleWithProviders, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgZorroModule } from './ng-zorro/ng-zorro.module';
import { NgZorroIconModule } from './ng-zorro-icon/ng-zorro-icon.module';

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToggleLayoutComponent } from './components/toggle-layout/toggle-layout.component';
import { CommonService, LayoutService, ResizeService } from './services';

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
    RouterModule
  ],
  exports: [
    NgZorroModule,
    NgZorroIconModule,
    RouterModule
  ],
  schemas:[
    NO_ERRORS_SCHEMA
  ]
})
export class CoreModule { 
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        CommonService,
        LayoutService,
        ResizeService
      ]
    };
  }
}
