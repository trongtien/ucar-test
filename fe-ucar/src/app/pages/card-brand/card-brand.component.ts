import { Component } from '@angular/core';
import { ICommonSelect } from '@app/core/model';

@Component({
  selector: 'app-card-brand',
  templateUrl: './card-brand.component.html',
  styleUrls: ['./card-brand.component.scss']
})
export class CardBrandComponent {
  public selectFilterCardBrand: any = {
    label: 'All',
    value: 'all'
  }

  public filterCardBrand: Array<ICommonSelect> = [
    {
      label: 'All',
      value: 'all'
    },
    {
      label: 'Last Updated',
      value: 'last_updated'
    },
    {
      label: 'Brand Name',
      value: 'brand_namme'
    },
    {
      label: 'Number of Models',
      value: 'number_of_models'
    }
  ]
}
