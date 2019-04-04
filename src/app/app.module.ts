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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainComponent,
    LoginComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
