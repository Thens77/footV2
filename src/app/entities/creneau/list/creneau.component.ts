import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../club/club.model';
import { ClubService } from '../../club/service/club.service';
import { Proprietaire } from '../../proprietaire/proprietaire.model';
import { ProprietaireService } from '../../proprietaire/service/proprietaire.service';
import { Creneau } from '../creneau.model';
import { CreneauService } from '../service/creneau.service';

@Component({
  selector: 'app-creneau',
  templateUrl: './creneau.component.html',
  styleUrls: ['./creneau.component.css']
})
export class CreneauComponent implements OnInit {
  cneneaux : Creneau[] | undefined ;
  club : Club | undefined;
  idp : number = 3 ;
  searchText : any ;
  data1: number | undefined;
  confirme = false ;
  isDeleteFailed: boolean | undefined ;
  isDeleteSucces: boolean | undefined ;
  errorMessage: any;
  succesMessage : any ;
  isShow: boolean | undefined;
  topPosToStartShowing = 100;
  idc : number | undefined ;

  constructor(private activatedRoute : ActivatedRoute, private clubService : ClubService, private creneauService : CreneauService , public dialog: MatDialog) { }
  retrievedImage : any;

  ngOnInit(): void {
    this.idc = window.history.state.idc;
    console.log(this.idc)
    this.getClub();
    this.get();
    this.ionViewDidLoad()
  }

  ionViewDidLoad(){
    setTimeout(() => {
      this.isDeleteFailed = false ;
      this.isDeleteSucces = false ;
     
    }, 3000);
}

  private get() : void {
    this.creneauService.listByClub(this.idc).subscribe(data=> {
      this.cneneaux = data ;
      console.log(this.cneneaux);
    })
  }

  getClub():void{
    this.clubService.get(this.idc).subscribe(data=> {
      this.club = data ;
      this.creneauService.listByClub(this.club?.id).subscribe(data=> {
        this.cneneaux = data ;
        console.log(this.cneneaux);
      })
      console.log(this.club);
    })
  }

  delete(id?: number): void {
   // this.matiereService.delete(id).subscribe(() => {
     //this.get();
    //});
    this.data1 = id ;
    this.openDialog('500','500')
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DeleteDialogue, {
      data : {req :this.data1, res : null },
      width: '500px'
    })
    .afterClosed().subscribe(
      data =>  {
        this.ngOnInit();
        this.gotoTop();
      console.log(data) ;
      this.isDeleteFailed = data.res.delF;
      this.isDeleteSucces = data.res.delS;
      console.log(this.isDeleteFailed) ;
      this.errorMessage = data.res.err ; 
      this.succesMessage = data.res.suc;
     // this.errorMessage=data.err ; 
     // this.isDeleteFailed=res.del ;
     
    })
    ;
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}

@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog.html',
})
export class DeleteDialogue {
  errorMsg? : String ;
  succesMsg? : String;
  isDeleteFailed : boolean | undefined ;
  isDeleteSucces : boolean | undefined ;

  constructor( 
   @Inject(MAT_DIALOG_DATA) public data: any ,
   public creneauService : CreneauService ,
   public dialogRef: MatDialogRef<DeleteDialogue>, 
   private router:Router
   ){}

  non(){
    this.dialogRef.close();
  }

  confirmer(){
    console.log(this.data)
    this.creneauService.delete(this.data!.req).subscribe({
      next : () => {
        this.succesMsg = 'matiere supprimee avec succes' ;
        this.errorMsg = undefined ;
         this.isDeleteFailed=false 
         this.isDeleteSucces=true 
         this.data.res = {
          err: this.errorMsg ,
          suc: this. succesMsg, 
          delF: this.isDeleteFailed,
          delS:this.isDeleteSucces
      }
        this.dialogRef.close(  this.data  )},
      error:()=>{
        this.succesMsg = undefined ;
        this.errorMsg = 'Cette matiere est inscrite dans une formation' ;
        this.isDeleteFailed = true;
        this.isDeleteSucces=false ; 
        this.data.res = {
          err: this.errorMsg ,
          suc: this. succesMsg, 
          delF: this.isDeleteFailed,
          delS:this.isDeleteSucces
      }
        this.dialogRef.close(  this.data  )
      },
      complete: () => {
        
  }
    
   
  })
  
 

     }


     
}
