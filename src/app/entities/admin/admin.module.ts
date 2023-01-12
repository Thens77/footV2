import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './route/admin-routing.module';
import { AdminUpdateComponent } from './update/admin-update.component';
import { AdminComponent } from './list/admin.component';
import { AdminDetailComponent } from './detail/admin-detail.component';
import { AdminDeleteComponent } from './delete/admin-delete.component';



@NgModule({
  declarations: [
    AdminUpdateComponent,
    AdminComponent,
    AdminDetailComponent,
    AdminDeleteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
