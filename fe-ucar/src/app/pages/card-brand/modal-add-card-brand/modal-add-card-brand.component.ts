import { Component } from '@angular/core';
import { ICommonSelect, ITableCardBrandItem } from '@app/core/models';

@Component({
  selector: 'app-modal-add-card-brand',
  templateUrl: './modal-add-card-brand.component.html',
  styleUrls: ['./modal-add-card-brand.component.scss']
})
export class ModalAddCardBrandComponent {
  isVisible = true;
  isConfirmLoading = false;

  constructor(){}

  public handleCancel() {

  }

  public submitForm() {

  }
}
