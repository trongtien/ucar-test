import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
@NgModule({
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzAvatarModule
  ]
})
export class NgZorroModule { }
