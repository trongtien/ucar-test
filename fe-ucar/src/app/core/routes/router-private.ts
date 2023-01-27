import { Routes } from '@angular/router'


export const RouterPrivate: Routes = [
    {
      path: '', 
      children: [
        {
          path: 'card-brand',
          loadChildren: () => import('@pages/card-brand/card-brand.module').then(m => m.CardBrandModule)
        }
      ]
    }
  ];
  