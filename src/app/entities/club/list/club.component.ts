import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Proprietaire } from '../../proprietaire/proprietaire.model';
import { ProprietaireService } from '../../proprietaire/service/proprietaire.service';
import { Club, IClub } from '../club.model';
import { ClubService } from '../service/club.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css'],
})
export class ClubComponent implements OnInit {
  clubs : Club[] | undefined ;
  prop : Proprietaire | undefined;
  idp : number = Number(localStorage.getItem('userId')) ;
  searchText : any ;
  data1: number | undefined;
  confirme = false ;
  isDeleteFailed: boolean | undefined ;
  isDeleteSucces: boolean | undefined ;
  errorMessage: any;
  succesMessage : any ;
  isShow: boolean | undefined;
  topPosToStartShowing = 100;

  constructor( private proporietaireService : ProprietaireService, private clubService : ClubService , public dialog: MatDialog) { }
  retrievedImage : any;

  ngOnInit(): void {
    console.log(localStorage.getItem("role"));

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
    this.clubService.getbyProp(this.idp).subscribe(data=> {
      this.clubs = data ;
      console.log(this.clubs);
      this.clubs.forEach((element, index) => {
        this.retrievedImage = 'data:image/jpeg;base64,' +element.picByte;
         this.clubs![index].picByte = this.retrievedImage; 
  
 });
    })
  }
  getUser():void{
    this.proporietaireService.find(this.idp).subscribe(data=> {
      this.prop = data ;
      console.log(this.prop);
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
   public clubService : ClubService ,
   public dialogRef: MatDialogRef<DeleteDialogue>, 
   private router:Router
   ){}

  non(){
    this.dialogRef.close();
  }

  confirmer(){
    console.log(this.data)
    this.clubService.delete(this.data!.req).subscribe({
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
