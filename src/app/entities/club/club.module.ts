import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubDeleteComponent } from './delete/club-delete.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ClubUpdateComponent } from './update/club-update.component'; 
import { RouterModule } from '@angular/router';
import { MatcheComponent } from './matche/matche.component';


@NgModule({
  declarations: [ 
    ClubDeleteComponent,
  ],
  imports: [
    RouterModule,
    CommonModule ,
    GoogleMapsModule,
    ]
})
export class ClubModule {}
