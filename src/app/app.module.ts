import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FacebookModule} from 'ngx-facebook';
import { ArticleComponent } from './article/article.component';
import {AuthConfig, JwksValidationHandler, OAuthModule, OAuthModuleConfig, OAuthStorage, ValidationHandler} from 'angular-oauth2-oidc';
import { EditComponent } from './admin/edit/edit.component';
import {environment} from '../environments/environment';

const config: AuthConfig = {
  issuer: 'https://jeroenheijmans.eu.auth0.com/',
  clientId: 'GICewG40jdYWEnmuKNFux3MW4auQypSF',
  customQueryParams: { audience: 'https://auth0-demo-001.infi.nl' },
  redirectUri: window.location.origin + '/index.html',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email',
};

config.logoutUrl = `${config.issuer}v2/logout?client_id=${config.clientId}&returnTo=${encodeURIComponent(config.redirectUri)}`;

const authModuleConfig: OAuthModuleConfig = {
  // Inject "Authorization: Bearer ..." header for these APIs:
  resourceServer: {
    allowedUrls: ['http://localhost:8080'],
    sendAccessToken: true,
  },
};

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainComponent,
    LoginComponent,
    ArticleComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot(authModuleConfig),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    ToastrModule.forRoot({
      closeButton: true,
      newestOnTop: false,
      progressBar: false,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      timeOut: 5000,
    }),
        FacebookModule.forRoot()
  ],
  providers: [
    { provide: OAuthModuleConfig, useValue: authModuleConfig },
    { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: OAuthStorage, useValue: localStorage },
    { provide: AuthConfig, useValue: config },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
