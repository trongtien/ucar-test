import { NgModule } from '@angular/core'
import { CoreModule } from '@app/core/core.module';
import { CardBrandComponent } from './card-brand.component';

@NgModule({
    imports: [CoreModule],
    declarations: [CardBrandComponent]
})
export class CardBrandModule { }