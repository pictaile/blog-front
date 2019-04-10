import { Component, OnInit } from '@angular/core';
import { OAuthService, JwksValidationHandler, AuthConfig } from 'angular-oauth2-oidc';
import {environment} from '../../environments/environment';
import {ArticlesService} from '../general/xhr/articles/articles.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public data;

  constructor(
    protected articlesService: ArticlesService,
  ) {
  }

  public ngOnInit() {
    this.getArticles();
  }

  public getArticles() {
    this.articlesService.getArticles().subscribe(
      res => {
        this.data = res;
      }
    );
  }

}
