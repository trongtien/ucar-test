import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';
import { RouterPrivate } from './core/routes/router-private';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: RouterPrivate
  },
];

@NgModule({
  imports: [[RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: "reload"
  })],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
