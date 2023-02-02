import { Routes } from '@angular/router'
import { CardBrandComponent } from '@app/pages/card-brand/card-brand.component';
import { PathRouter } from '../contants';


export const RouterPrivate: Routes = [
  {
    path: PathRouter.CARD_BRAND,
    component: CardBrandComponent,
  }
];
  