import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core'
import { CoreModule } from '@app/core/core.module';
import { CardBrandComponent } from './card-brand.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        CommonModule, 
        CoreModule
    ],
    exports: [CardBrandComponent],
    declarations: [CardBrandComponent],
})
export class CardBrandModule { }