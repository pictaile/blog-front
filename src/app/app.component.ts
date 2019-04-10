import { Component } from '@angular/core';
import {AuthConfig, JwksValidationHandler, OAuthErrorEvent, OAuthService} from 'angular-oauth2-oidc';
import {ArticlesService} from './general/xhr/articles/articles.service';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public username;
  constructor(
    private oauthService: OAuthService,
    private router: Router,
    protected articlesService: ArticlesService
  ) {
    oauthService.loadDiscoveryDocument()
      .then(() => oauthService.tryLogin())
      .then(() => {
        if (!oauthService.hasValidAccessToken()) {
          return oauthService.silentRefresh();
        }
      })
      .then(() => {
        if (oauthService.getIdentityClaims()) {
          this.username = oauthService.getIdentityClaims()['name'];
        }
      });

    oauthService.setupAutomaticSilentRefresh();
  }

  public login() {
    this.oauthService.initImplicitFlow();
  }

  public logout() {
    this.oauthService.logOut();
    this.router.navigate(['/login']);
  }

}
