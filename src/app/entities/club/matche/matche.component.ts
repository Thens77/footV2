import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { TerrainService } from '../../terrain/service/terrain.service';
import { ITerrain } from '../../terrain/terrain.model';


import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClientService } from '../../client/service/client.service';
import { IClient } from '../../client/client.model';
import { PanierService } from '../../panier/service/panier.service';
import { Panier } from '../../panier/panier.model';
import { IReservation } from '../../reservation/reservation.model';
import { ReservationService } from '../../reservation/service/reservation.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-matche',
  templateUrl: './matche.component.html',
  styleUrls: ['./matche.component.css']
})
export class MatcheComponent implements OnInit {
  public join: IReservation[] | any;
  public limited : number |any;
  public idres!: number;
  public res: IReservation | any;
  public numberofJoin: number | any;
  public idc : number | undefined ;
  public friend: number | any;

  public terrains: ITerrain[] = [];
  public comp: number | any;
  public dispo: IReservation[] = [];

  constructor(
    private reserve: ReservationService,
    private terrainService: TerrainService,
    public dialog: MatDialog ,
    public activateRoute : ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.idc = Number(this.activateRoute.parent?.snapshot.params["id"]);
    this.loadjoin();
   
    
    console.log(this.idc);
 
  }

  loadjoin(): void {
    this.reserve.availableTeam(this.idc).subscribe((daya) => {
      this.join = daya; 
      console.log(this.join);
    });
  }

  loadreserve(): void {
    this.join = [];

    this.reserve.availableTeam(this.idc).subscribe((daya) => {
      this.dispo = daya ;
      for (let ter of this.dispo) {
        let toto: number | any = ter.terrain?.nbrJoueurs;
        let tat: number | any = ter.nbrjoueur;
        this.comp = toto - tat;
        if (this.comp >= this.numberofJoin) {
          this.join.push(ter);
          console.log(this.join);
        }
      }
    });
  }
  

  openDialog(id: number): void {
    let dialogRef = this.dialog.open(DialogMat, {
      data: {
        friend: this.friend,
        res: id,
      },
      panelClass: 'custom-dialog-container',
      height: '400px',
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((e) => (this.friend = e));
  }
}

@Component({
  selector: 'pop-up1',
  templateUrl: './pop-up.html',
  encapsulation: ViewEncapsulation.None,
})
export class DialogMat {
  public currentRes: IReservation | any;
  public userId: number | any;
  public currentUser: IReservation | any;

  public limited: number | any;

  constructor(
    public dialogRef: MatDialogRef<DialogMat>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ReservationService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    console.log('friend' + this.data.friend);
    console.log('res' + this.data.res);
    this.findUse();
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  findUse(): void {
    this.service.find(this.data.res).subscribe((data) => {
      this.currentUser = data;
      this.limited = Number(this.currentUser.terrain.nbrJoueurs) - Number(this.currentUser.nbrjoueur);
    });
  }

  modif(): void {
    this.service.find(Number(this.data.res)).subscribe((data) => {
      
      this.currentRes = data;
      console.log('curent ' + this.currentRes);
      this.currentRes.nbrjoueur = Number(this.currentRes.nbrjoueur) + Number(this.data.friend);

      this.service.update(this.data.res, this.currentRes).subscribe((data) => {
        console.log('updated');
        this.service
          .assoc(Number(this.data.res), Number(this.data.friend) , Number(localStorage.getItem("userId")))
          .subscribe((data) => {
            console.log('assoc added');
          });
      });
    });
  }
}
