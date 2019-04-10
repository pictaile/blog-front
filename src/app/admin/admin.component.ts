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

  private authConfig: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin + '/index.html',
    clientId: environment.Google.clientId,
    scope: 'kostya.ochotnik@gmail.com',
    strictDiscoveryDocumentValidation: false
  };

  constructor(
    private oauthService: OAuthService,
    protected articlesService: ArticlesService,
  ) {
    this.oauthService.configure(this.authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public ngOnInit() {
    // this.oauthService.initImplicitFlow();
    this.articlesService.getArticles().subscribe(
      res => {
        this.data = res;
      }
    );

  }
}
