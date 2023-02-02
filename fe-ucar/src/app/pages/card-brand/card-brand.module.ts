import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core'
import { CoreModule } from '@app/core/core.module';
import { CardBrandComponent } from './card-brand.component';
import { CommonModule } from '@angular/common';
import { CardBrandRoutingModule } from './card-brand-routing.module';
import { ModalAddCardBrandComponent } from './modal-add-card-brand/modal-add-card-brand.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        CardBrandRoutingModule
    ],
    exports: [
        CardBrandComponent
    ],
    declarations: [
        CardBrandComponent,
        ModalAddCardBrandComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CardBrandModule { }