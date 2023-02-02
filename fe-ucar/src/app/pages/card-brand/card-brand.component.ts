import { Component } from '@angular/core';
import { ICommonSelect, ITableCardBrandItem } from '@app/core/models';

@Component({
  selector: 'app-card-brand',
  templateUrl: './card-brand.component.html',
  styleUrls: ['./card-brand.component.scss']
})
export class CardBrandComponent {
  public selectFilterCardBrand = 'all'

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
      value: 'brand_name'
    },
    {
      label: 'Number of Models',
      value: 'number_of_models'
    }
  ]

  public dataTable: Array<ITableCardBrandItem> = [
    {
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 2,
      checked: false,
      expand: false
    },
    {
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee Jeep Grand Cherokee Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 2,
      checked: false,
      expand: false
    },
    {
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    },
    {
      avatar: '/assets/images/avatar_item.svg',
      name: 'Toyota',
      description: 'Jeep Grand Cherokee',
      number_model: 1200,
      last_update: '25/12/2022',
      status: 1,
      checked: false,
      expand: false
    }
  ]
}
