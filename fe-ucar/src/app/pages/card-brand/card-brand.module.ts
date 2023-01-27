import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/core/core.module';
import { CardBrandComponent } from './card-brand.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule
    ],
    declarations: [CardBrandComponent]
})
export class CardBrandModule { }