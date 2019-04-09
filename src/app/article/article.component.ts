import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticlesService} from '../general/xhr/articles/articles.service';
import {FacebookService, InitParams} from 'ngx-facebook';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public id;
  public data;

  constructor(
    private route: ActivatedRoute,
    protected articlesService: ArticlesService,
    private fb: FacebookService
  ) { }

  public ngOnInit() {
    this.initFB();
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getArticle();

    });
  }

  public getArticle() {
    this.articlesService.getArticles(this.id).subscribe(
      res => {
        this.data = res;
      }
    );
  }


  private initFB() {
    const initParams: InitParams = environment.FB;

    this.fb.init(initParams);
  }

}
