import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UsersDeleteComponent } from './delete/users-delete.component';
import { UsersDetailComponent } from './detail/users-detail.component';
import { UsersComponent } from './list/users.component';
import { UsersUpdateComponent } from './update/users-update.component';



@NgModule({
  declarations: [
 
    UsersDeleteComponent,
    UsersDetailComponent,
    UsersComponent,
    UsersUpdateComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class UsersModule { }
