import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierDeleteComponent } from './delete/panier-delete.component';
import { PanierDetailComponent } from './detail/panier-detail.component';
import { PanierComponent } from './list/panier.component';
import { PanierUpdateComponent } from './update/panier-update.component';



@NgModule({
  declarations: [
    PanierDeleteComponent,
    PanierDetailComponent,
    PanierComponent,
    PanierUpdateComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class PanierModule { }
