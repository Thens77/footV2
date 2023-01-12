import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentaireDeleteComponent } from './delete/commentaire-delete.component';
import { CommentaireDetailComponent } from './detail/commentaire-detail.component';
import { CommentaireComponent } from './list/commentaire.component';



@NgModule({
  declarations: [
    CommentaireDeleteComponent,
    CommentaireDetailComponent,
    CommentaireComponent,
    
  ],
  imports: [
    CommonModule,
  ]
})
export class CommentaireModule { }
