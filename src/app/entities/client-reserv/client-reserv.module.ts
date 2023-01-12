import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ClientReservDeleteComponent } from './delete/client-reserv-delete.component';
import { ClientReservDetailComponent } from './detail/client-reserv-detail.component';
import { ClientReservComponent } from './list/client-reserv.component';
import { ClientReservUpdateComponent } from './update/client-reserv-update.component';



@NgModule({
  declarations: [ 
    ClientReservDeleteComponent,
    ClientReservDetailComponent,
    ClientReservComponent,
    ClientReservUpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientReservModule { }
