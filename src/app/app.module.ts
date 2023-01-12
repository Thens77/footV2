import { NgModule , CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './entities/article/list/article.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainComponent } from './layouts/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './config/auth.guard';
import { AuthInterceptor } from './config/auth.interceptor'; 
import { MatSelectModule } from '@angular/material/select';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClubComponent } from './entities/club/list/club.component';
import { CommonModule } from '@angular/common';
import { ReservationUpdateComponent } from './entities/reservation/update/reservation-update.component';
import { ClubUpdateComponent } from './entities/club/update/club-update.component';
import { MatDialogModule} from '@angular/material/dialog' ;
import { CreneauUpdateComponent } from './entities/creneau/update/creneau-update.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreneauComponent } from './entities/creneau/list/creneau.component';
import { CommentaireUpdateComponent } from './entities/commentaire/update/commentaire-update.component';
import { HomeclubComponent } from './entities/club/homeclub/homeclub.component';
import { ClubTComponent } from './entities/club/club-t/club-t.component';
import { TerrainComponent } from './entities/terrain/list/terrain.component';
import { NavbarComponentC } from './layouts/navbarC/navbar.component';
import { NavbarComponentT } from './layouts/navbarT/navbar.component';
import { ListTerrain2Component } from './entities/terrain/list-terrain2/list-terrain2.component';
import { TerrainUpdateComponent } from './entities/terrain/update/terrain-update.component';
import { HomeComponent, SignInDialog, SignUpDialog } from './layouts/home/home.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { CalendierComponent } from './entities/reservation/calendier/calendier.component';
import { DialogMat, MatcheComponent } from './entities/club/matche/matche.component';
import { ClienthomeComponent } from './layouts/clienthome/clienthome.component';
import { ReservClientComponent } from './entities/reservation/reserv-client/reserv-client.component';
import { AdminComponent } from './layouts/admin/admin.component';

FullCalendarModule.registerPlugins([ 
  interactionPlugin,
  dayGridPlugin,
  resourceTimelinePlugin,
  timeGridPlugin,
  listPlugin
]);

@NgModule({
  declarations: [
    ClubComponent,
    ClubUpdateComponent,
    ArticleComponent,
    AppComponent,
    DashboardComponent,
    FooterComponent,
    MainComponent,
    NavbarComponentC,
    ReservationUpdateComponent,
    CreneauUpdateComponent,
    CreneauComponent,
    CommentaireUpdateComponent,
    ClubUpdateComponent,
    HomeclubComponent,
    ClubTComponent,
    TerrainComponent,
    TerrainUpdateComponent,
    NavbarComponentT,
    ListTerrain2Component,
    HomeComponent,
    SignInDialog,
    SignUpDialog,
    CalendierComponent,
    MatcheComponent,
    DialogMat,
    ClienthomeComponent,
    ReservClientComponent,
    AdminComponent ,

  ],
  imports: [
    NgMultiSelectDropDownModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    RouterModule,
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxWebstorageModule.forRoot(),
    
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },  
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
