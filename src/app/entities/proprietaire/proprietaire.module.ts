import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietaireDeleteComponent } from './delete/proprietaire-delete.component';
import { ProprietaireDetailComponent } from './detail/proprietaire-detail.component';
import { ProprietaireComponent } from './list/proprietaire.component';
import { ProprietaireUpdateComponent } from './update/proprietaire-update.component';



@NgModule({
  declarations: [
    ProprietaireDeleteComponent,
    ProprietaireDetailComponent,
    ProprietaireComponent,
    ProprietaireUpdateComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProprietaireModule { }
