import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CardBrandComponent } from "./card-brand.component";


const CardBrandRouter = [
    {
        path: '',
        component: CardBrandComponent,
    }
]

@NgModule({
    imports: [RouterModule.forChild(CardBrandRouter)],
    exports: [RouterModule]
})
export class CardBrandRoutingModule {}