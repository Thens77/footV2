import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TerrainService } from '../service/terrain.service';
import { Terrain } from '../terrain.model';

@Component({
  selector: 'app-list-terrain2',
  templateUrl: './list-terrain2.component.html',
  styleUrls: ['./list-terrain2.component.css']
})
export class ListTerrain2Component implements OnInit {
  terrains : Terrain[] | undefined;
  @Input() 
  idc? : number | undefined ;
  id : number | undefined ;
  retrievedImage : any ;
  constructor(protected activatedRoute:ActivatedRoute , private terrainService : TerrainService ,private router : Router) { }
  ngOnInit(): void {
    this.get();
  }
  private get() : void {
    this.id = window.history.state.idc;
    this.terrainService.list(this.id!).subscribe(data=> {
      this.terrains = data ;
      this.terrains.forEach(element => {
        this.retrievedImage = 'data:image/jpeg;base64,' +element.picByte;
        element.picByte = this.retrievedImage; 
      });
      
      console.log(this.terrains)
    })
  }

}
