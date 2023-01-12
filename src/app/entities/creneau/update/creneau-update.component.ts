import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../club/club.model';
import { ClubService } from '../../club/service/club.service';
import { Creneau, ICreneau } from '../creneau.model';
import { CreneauService } from '../service/creneau.service';

@Component({
  selector: 'app-creneau-update',
  templateUrl: './creneau-update.component.html',
  styleUrls: ['./creneau-update.component.css']
})
export class CreneauUpdateComponent implements OnInit {
  creneau: Creneau = new Creneau();
  club: Club = new Club();
  idc!: number;
  id!: number | undefined;
  editForm = this.fb.group({
    id: [],
    heureDebut: [],
    heureFin: [],
    club : [] 
  });
  constructor(public dialog: MatDialog ,private clubService: ClubService,private creneauService : CreneauService ,private router : Router, protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.idc = this.idc =window.history.state.idc;
    this.id =this.activatedRoute.snapshot.params["id"];
    this.getClub();
    this.creneauService.find(this.id!).subscribe( data => {
      this.creneau = data ;
    }, error => console.log(error))
  
  }
  getClub(): void {
    this.clubService.get(this.idc!).subscribe(
      (data) => {
        this.club = data;
        console.log(this.club)
      },
      (error) => console.log(error)
    );
  }

  protected updateForm(creneau: ICreneau): void {
    this.editForm.patchValue({
      id: creneau.id,
      heureDebut : creneau.heureDebut,
      heureFin: creneau.heureFin,
      club : creneau.club
    });
  }
  seconds = true;
  save():void{
    
   
    
   // this.editForm.reset();
    console.log(this.creneau.heureFin);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.creneau.heureDebut =  `${this.creneau.heureDebut}:00`
      this.creneau.heureFin =  `${this.creneau.heureFin}:00`
      this.creneau.club = this.club ;
      this.creneauService.add(this.creneau).subscribe(data =>{
        this.openDialog('500ms', '500ms');
        console.log(data);
        //this.router.navigate(['/dashboard/creneau'])
        console.log("done")
        this.editForm.reset();
        this.editForm.get(['id'])!.setValue(undefined);
        this.creneau.id = undefined ; 
      },
      error => console.log(error)
      );
    }
   else{
    this.creneau.heureDebut =  `${this.creneau.heureDebut}`
      this.creneau.heureFin =  `${this.creneau.heureFin}`
      this.creneau.club = this.club ;
    this.creneauService.update(this.id!,this.creneau).subscribe(data =>{
      this.openDialog('500ms', '500ms');
      console.log(data);
      this.router.navigate(['/dashboard/creneau'])

    },
    error => console.log(error)
    )
   }
   
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    let dialogRef = this.dialog.open( SuccessAlertDialog , {
      width: '250px'
     
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.router.navigate(['dashboard/matieres']);
    });
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'success-alert-dialog.html',
})
export class SuccessAlertDialog {
  constructor(public dialogRef: MatDialogRef<SuccessAlertDialog>) {

  }

  closeDialog() {
    //Write your stuff here
    this.dialogRef.close(); // <- Closes the dialog
  }
}
