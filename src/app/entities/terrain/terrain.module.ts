import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { TerrainDetailComponent } from './detail/terrain-detail.component';
import { TerrainComponent } from './list/terrain.component';
import { TerrainUpdateComponent } from './update/terrain-update.component';
import { TerrainDeleteComponent } from './delete/terrain-delete.component';
import { ListTerrain2Component } from './list-terrain2/list-terrain2.component';



@NgModule({
  declarations: [
    TerrainDeleteComponent, 
    TerrainDetailComponent,

  ],
  imports: [],
})
export class TerrainModule {}
