import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core/core.module';
import { CardBrandComponent } from './card-brand.component';
import { Routes } from '@angular/router';

@NgModule({
    imports: [CoreModule],
    declarations: [CardBrandComponent]
})
export class CardBrandModule { }