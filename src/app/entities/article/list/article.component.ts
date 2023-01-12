import { Component, OnInit } from '@angular/core';
import { IArticle } from '../article.model';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article: IArticle[] | undefined; 

  constructor(private service: ArticleService) {
   
  }

  ngOnInit(): void {
    this.loadAll();
    
  }

  loadAll(): void {
      
    this.service.list().subscribe(data => {
      
      this.article = data;
      console.warn(this.article);
        
      
    })
  }
}
