import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './route/report-routing.module';
import { ReportDeleteComponent } from './delete/report-delete.component';
import { ReportDetailComponent } from './detail/report-detail.component';
import { ReportComponent } from './list/report.component';
import { ReportUpdateComponent } from './update/report-update/report-update.component';



@NgModule({
  declarations: [
    ReportDeleteComponent,
    ReportDetailComponent,
    ReportComponent,
    ReportUpdateComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule
  ]
})
export class ReportModule { }
