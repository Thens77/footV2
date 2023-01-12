import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';
import { ClientReserv } from '../../client-reserv/client-reserv.model';
import { ClientReservService } from '../../client-reserv/service/client-reserv.service';
import { Client } from '../../client/client.model';
import { ClientService } from '../../client/service/client.service';
import { Panier } from '../../panier/panier.model';
import { PanierService } from '../../panier/service/panier.service';
import { UsersService } from '../../users/service/users.service';
import { Users } from '../../users/users.model';
import { Reservation } from '../reservation.model';
import { ReservationService } from '../service/reservation.service';

@Component({
  selector: 'app-reserv-client',
  templateUrl: './reserv-client.component.html',
  styleUrls: ['./reserv-client.component.css']
})
export class ReservClientComponent implements OnInit {
   reserv! : ClientReserv[]; 
   res! : ClientReserv ;
   reservation! : Reservation ;
   user! : Client; 
   paniers! : Panier[];
  constructor(public reservationService : ReservationService , public loginService : LoginService , private panierService : PanierService  , private clientresSerivice : ClientReservService, private clientS : ClientService) { }

  ngOnInit(): void {
    this.getUser()
    this.getPanier()
    this.get()
  }

  private get() : void {
   
    //this.idc =Number(this.activatedRoute.parent?.snapshot.params["id"]) ;
   // console.log(this.idc);
    
  }

  getUser(){
    this.clientS.find(Number(localStorage.getItem("userId"))).subscribe(data=> {
      this.user = data ;
      console.log(this.user)
    })
  }

  getPanier(){
    this.panierService.listByClient(Number(localStorage.getItem("userId"))).subscribe(data=> {
      this.paniers = data ;
      console.log(this.paniers)
      this.clientresSerivice.listByclient(this.paniers[0].id).subscribe(data=> {
        this.reserv = data ;
        
        console.log(this.reserv)
      })
    })
  }

  diss(id : number){
    console.log(id)
    this.clientresSerivice.find(id).subscribe(data=> {
      this.res = data ;
      this.reservation = data.reservation;
      this.reservation.nbrjoueur = Number(this.reservation.nbrjoueur) - Number(data.nbr) ;
      console.log(this.reservation.nbrjoueur)
      console.log(data.nbr)
      this.reservationService.update(this.reservation.id, this.reservation).subscribe(data=>{
        console.log(data) ;
      });
    })

    this.clientresSerivice.delete(id).subscribe({
      next : () => {
       },
      error:()=>{
        console.error();
      },
      complete: () => {
        
  }

    })
  }

}
