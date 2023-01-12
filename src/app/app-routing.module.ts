import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AuthGuard2 } from './config/auth.guard';
import { ASC } from './config/navigation.constants';
import { ArticleDetailComponent } from './entities/article/detail/article-detail.component';
import { ArticleComponent } from './entities/article/list/article.component';
import { ArticleUpdateComponent } from './entities/article/update/article-update.component';
import { ClubTComponent } from './entities/club/club-t/club-t.component';
import { HomeclubComponent } from './entities/club/homeclub/homeclub.component';
import { ClubComponent } from './entities/club/list/club.component';
import { MatcheComponent } from './entities/club/matche/matche.component';
import { ClubUpdateComponent } from './entities/club/update/club-update.component';
import { CreneauComponent } from './entities/creneau/list/creneau.component';
import { CreneauUpdateComponent } from './entities/creneau/update/creneau-update.component';
import { CalendierComponent } from './entities/reservation/calendier/calendier.component';
import { ReservationComponent } from './entities/reservation/list/reservation.component';
import { ReservClientComponent } from './entities/reservation/reserv-client/reserv-client.component';
import { ReservationUpdateComponent } from './entities/reservation/update/reservation-update.component';
import { ListTerrain2Component } from './entities/terrain/list-terrain2/list-terrain2.component';
import { TerrainComponent } from './entities/terrain/list/terrain.component';
import { TerrainUpdateComponent } from './entities/terrain/update/terrain-update.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClienthomeComponent } from './layouts/clienthome/clienthome.component';
import { HomeComponent } from './layouts/home/home.component';
import {  NavbarComponentC } from './layouts/navbarC/navbar.component';
import { NavbarComponentT } from './layouts/navbarT/navbar.component';

const routes: Routes = [
  {path:"home" , component :  HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"admin" , component :  AdminComponent },
  {path:"clientreserv" , component :  ReservClientComponent },
  {path:"clienthome" , component :  ClienthomeComponent , canActivate : [AuthGuard2] },
  {path:"reserv" , component :  ReservationUpdateComponent },
  {path:"club/:id" , component :  ClubTComponent ,
  children: 
  [ 
    {
      path: 'terrains',
      component:TerrainComponent ,
    }, 
    {
      path: 'matches',
      component:MatcheComponent ,
    }, 
    {
      path: 'home',
      component: HomeclubComponent,
    },
  ],
  }, 
    {
      path: '',
      component: ArticleComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
    {
      path: 'article',
      component: ArticleComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
    {
      path: 'article/:id/view',
      component: ArticleDetailComponent,
    },
    {
      path: 'article/new',
      component: ArticleUpdateComponent,
    },
    {
      path: 'article/:id/edit',
      component: ArticleUpdateComponent,
    },
    {
      path: 'club',
      component: ClubComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
    {
      path: 'reservation',
      component: ReservationComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
   
    {
      path: 'reservation/new',
      component: ReservationUpdateComponent,
      data: {
        defaultSort: 'id,' + ASC,
      },
    },
    {
      path:'dashboard', canActivate: [AuthGuard],
      component: NavbarComponentC,
      children: 
      [ 
        {
          path: 'clubs',
          component:ClubComponent ,
        }, 
        {
          path: 'club/new',
          component: ClubUpdateComponent,
        },
        {
          path: 'gestion',
          component: NavbarComponentT,
         
          children: 
                [ 
                  {
                    path: 'terrains',
                    component:ListTerrain2Component ,
                  },
                  {
                    path: 'terrain/new',
                    component:TerrainUpdateComponent ,
                  }, 
                  {
                    path: 'terrain/',
                    component:TerrainUpdateComponent ,
                  }, 
                  {
                    path: 'creneaux',
                    component:CreneauComponent ,
                  },
                  {
                    path: 'creneau/new',
                    component:CreneauUpdateComponent ,
                  }, 
                  {
                    path: 'creneau/:id',
                    component:CreneauUpdateComponent ,
                  }, 
                  {
                    path: 'reservation',
                    component:CalendierComponent ,
                  },
                ]
        },
      ],
    },
   
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
