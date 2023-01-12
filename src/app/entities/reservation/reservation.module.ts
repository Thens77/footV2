import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ReservationDeleteComponent } from './delete/reservation-delete.component';
import { ReservationDetailComponent } from './detail/reservation-detail.component';
import { ReservationUpdateComponent } from './update/reservation-update.component'; 

import { FormsModule } from '@angular/forms';
import { ReservationComponent } from './list/reservation.component';
import { CalendierComponent } from './calendier/calendier.component';

@NgModule({
  declarations: [
    ReservationComponent,
    ReservationDeleteComponent,
    ReservationDetailComponent,
    
  ],
  imports: [ 
    FormsModule,
    CommonModule
    ]
})
export class ReservationModule { }
