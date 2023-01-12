import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Club } from '../../club/club.model';
import { TerrainService } from '../service/terrain.service';
import { ITerrain, Terrain } from '../terrain.model';
import { UntypedFormBuilder } from '@angular/forms';
import { ClubService } from '../../club/service/club.service';


@Component({
  selector: 'app-terrain-update',
  templateUrl: './terrain-update.component.html',
  styleUrls: ['./terrain-update.component.css']
})
export class TerrainUpdateComponent implements OnInit {
  terrain: Terrain = new Terrain();
  idc!: number;
  idt!: number;
  photos!: File;
  size: string | any;
  nbrJoueurs: number | any;
  prix: number | any;
  description: string | any;
  club: Club = new Club();
  imageName: any;
  editForm = this.fb.group({
    id: [],
    size: [],
    nbrJoueurs: [],
    prix: [],
    description: [],
 
    club: [],
  });

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private terrainService: TerrainService,
    private clubService: ClubService,
    protected fb: UntypedFormBuilder,
    protected activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idc = window.history.state.idc ;
   // this.idt = this.activatedRoute.snapshot.params['id'];
    console.log(this.idc)
   // console.log(this.idt)
    this.getClub();
    this.getTerrain();
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
  getTerrain(): void {
    this.terrainService.find(this.idt!).subscribe(
      (data) => {
        this.terrain = data;
        console.log(this.terrain)
      },
      (error) => console.log(error)
    );
  }
  public onFileChanged(event: any) {
    //Select File
    this.photos = event.target.files[0];
    console.log('haa hiiyaaa lfile  ' + this.photos.name);
    console.log('haa hiiyaaa sizee ' + this.photos?.size);
    this.handleFileSelect(event);
  }
  private base64textString: String = '';

  handleFileSelect(evt: any) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this.photos);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.club.picByte = btoa(binaryString);
    console.log('lakhraaaaaaaaa :' + this.club.photos);
  }
  protected updateForm(terrain: ITerrain): void {
    this.editForm.patchValue({
      id: terrain.id,
      size: terrain.size,
      nbrJoueurs: terrain.nbrJoueurs,
      prix: terrain.prix,
      description: terrain.description,
      club: this.club ,
    });
  }

  save(): void {
    console.log(this.terrain.description + "////////////////////////////////////////////////////////////////////////////////////");
    if (this.editForm.get(['id'])!.value === undefined) {
      this.terrain.club = this.club ;
      console.log(this.terrain)
      this.terrainService.add(this.terrain).subscribe(
        (data) => {
          this.openDialog('500ms', '500ms');
          console.log(data);
        },
        (error) => console.log(error)
      );
    } else {
      this.terrain.club = this.club ;
      this.terrainService.update(this.idt, this.terrain).subscribe(
        (data) => {
          console.log(data);
          this.openDialog('500ms', '500ms');
          
        },
        (error) => console.log(error)
      );
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
