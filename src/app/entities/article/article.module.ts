import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ArticleUpdateComponent } from './update/article-update.component';
import { ArticleDeleteComponent } from './delete/article-delete.component';
import { ArticleDetailComponent } from './detail/article-detail.component';  
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ 
    ArticleUpdateComponent,
    ArticleDeleteComponent,
    ArticleDetailComponent,
   
  ],
  imports: [
    RouterModule,
    CommonModule,
  ]
})
export class ArticleModule { }
