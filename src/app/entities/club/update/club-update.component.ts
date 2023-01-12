import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Club, IClub } from '../club.model';
import { ClubService } from '../service/club.service';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder } from '@angular/forms';
import * as L from 'leaflet';
import { ProprietaireService } from '../../proprietaire/service/proprietaire.service';
import { IProprietaire, Proprietaire } from '../../proprietaire/proprietaire.model';



@Component({
  selector: 'app-club-update',
  templateUrl: './club-update.component.html',
  styleUrls: ['./club-update.component.css']
})
export class ClubUpdateComponent implements OnInit {
  
  @ViewChild ('map')
  private mapContainer: ElementRef<HTMLElement> | undefined;
  prop : Proprietaire | undefined;
  idp : number = Number(localStorage.getItem('userId')) ;
  lat : number = 0.0;
  long : number = 0.0 ;
  club: Club = new Club();
  id!: number;
  selectedFile!: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  imageName: any;
  editForm = this.fb.group({
    id : [] , 
    idFiscal:[],
    description:[],
    clubName: [],
    sosName : [],
   
   
  });

  constructor(private proporietaireService : ProprietaireService,private router :Router ,private location : Location ,public dialog: MatDialog , private clubService : ClubService , protected fb: UntypedFormBuilder , protected activatedRoute : ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.params["id"];
    this.getUser();
    this.getClub();
    console.log(this.prop);
   
  }
  ngAfterViewInit() {
    setTimeout(() =>{ 
      const initialState = { lng: 11, lat: 49, zoom: 4 };
      const lefletMap: L.Map = L.map(this.mapContainer!.nativeElement).setView(
        [initialState.lat, initialState.lng],
        initialState.zoom
      );
      const isRetina = L.Browser.retina;
      const baseUrl =
        'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}';
      const retinaUrl =
        'https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}';
        var century21icon = L.icon({
          iconUrl: 'https://png.pngtree.com/png-clipart/20200813/ourlarge/pngtree-hand-drawn-stereo-position-positioning-icon-png-image_2325187.jpg',
          iconSize: [20, 20]
          });
       L.tileLayer(isRetina ? retinaUrl : baseUrl, {
        attribution:
          'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
        apiKey: '2e1e8625d3894c9eb0acdbfaba3effd8',
        maxZoom: 20,
        id: 'osm-bright',
      } as any).addTo(lefletMap);
        var latlng = new L.LatLng(this.lat, this.long);
            lefletMap.on("click", e => {
            // get the coordinates 
            lefletMap.eachLayer(function(layer) {
              if (layer instanceof L.Marker)
              {
                lefletMap.removeLayer(layer)
              }
      })
      this.club.latitude = e.latlng.lat ;
      this.club.longitude = e.latlng.lng ;
      this.long = e.latlng.lng ;
      console.log(this.club); 
        L.marker([e.latlng.lat, e.latlng.lng], {icon : century21icon , draggable:true }  ).addTo(lefletMap); // add the marker onclick
      });
  console.log(latlng)
      L.marker([latlng.lat ,latlng.lng],{icon:century21icon,draggable:true}).addTo(lefletMap);
      lefletMap.setView(latlng,15);
    }, 3000); 
    
  }

  getUser():void{
    this.proporietaireService.find(this.idp).subscribe(data=> {
      this.prop = data ;
      console.log(this.prop);
    })
  }

  getClub():void {
    this.clubService.get(this.id!).subscribe( (data: Club ) => {
      this.club = data ;
     
        this.lat  = this.club.latitude===undefined? 33.508659495052314 : this.club.latitude ;
        this.long = this.club.longitude===undefined? -7.575073242187501 : this.club.longitude ;
      
      
      console.log(this.club)
      
    }, error => console.log(error))
  }
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
    this.handleFileSelect(event);
  }
  private base64textString:String="";
  
 
  handleFileSelect(evt : any){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt : any) {
   var binaryString = readerEvt.target.result;
          this.club.picByte= btoa(binaryString);
  }
  protected updateForm(club: IClub): void {
    this.editForm.patchValue({
      id : club.id, 
      idFiscal: club.idFiscal,
      description: club.description,
      clubName: club.clubName,
      sosName : club.sosName ,
      picByte :club.picByte,

    });
  }
  

  save():void{
    console.log(this.club);
    console.log(this.lat);
    if(this.editForm.get(['id'])!.value === undefined ) { 
      this.club.proprietaire =this.prop ;
      this.clubService.add(this.club).subscribe(data =>{
        this.openDialog('500ms', '500ms');
        console.log(data);
      },
      error => console.log(error)
      );
    }
   else{
  
    this.clubService.update(this.club?.id ,this.club).subscribe(data =>{
      console.log(data);
      this.openDialog('500ms', '500ms');
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
