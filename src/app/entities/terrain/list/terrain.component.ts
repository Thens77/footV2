import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TerrainService } from '../service/terrain.service';
import { Terrain } from '../terrain.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationUpdateComponent } from '../../reservation/update/reservation-update.component';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.css']
})
export class TerrainComponent implements OnInit {
  terrains : Terrain[] | undefined;
  @Input() 
  idc? : number | undefined ;
  id : number | undefined ;
  retrievedImage : any ;
  constructor(private dialog : MatDialog , protected activatedRoute:ActivatedRoute , private terrainService : TerrainService ,private router : Router) { }

  ngOnInit(): void {
    this.get();
    console.log(this.idc);
  }

  private get() : void {
   
    this.idc =Number(this.activatedRoute.parent?.snapshot.params["id"]) ;
    console.log(this.idc);
    this.terrainService.list(this.idc!).subscribe(data=> {
      this.terrains = data ;
      this.terrains.forEach(element => {
        this.retrievedImage = 'data:image/jpeg;base64,' +element.picByte;
        element.picByte = this.retrievedImage; 
      });
      
      console.log(this.terrains)
    })
  }

  openReservationDialog(idt? : number): void {
    const dialogRef = this.dialog.open(ReservationUpdateComponent, {
      data : idt ,
    });

  
  }

}
