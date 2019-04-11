import { Injectable } from '@angular/core';
import {BaseSenderService} from '../base/base-sender.service';
import {MAIN_URL, URL_ENUM} from '../../enums/urls.enum';
import {HttpClient} from '@angular/common/http';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService extends BaseSenderService {

  constructor(
    private http: HttpClient,
    private oauthService: OAuthService
    ) {
    super();
  }

  public getArticles(id?: number) {
    const url = id ? `${MAIN_URL}/${URL_ENUM.ARTICLES}/${id}` :  `${MAIN_URL}/${URL_ENUM.ARTICLES}`;

    const request$ = this.http.get(url, {});

    return this.httpSender(request$);
  }

  public save(data) {
    const options = {
      ...data,
      sid: this.oauthService.getAccessToken()
    };

    const request$ = this.http.post(`${MAIN_URL}/${URL_ENUM.ARTICLES}/${data.id}`, options);

    return this.httpSender(request$);
  }
}
