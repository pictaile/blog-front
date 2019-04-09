import { Injectable } from '@angular/core';
import {BaseSenderService} from '../base/base-sender.service';
import {MAIN_URL, URL_ENUM} from '../../enums/urls.enum';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService extends BaseSenderService {

  constructor(   private http: HttpClient) {
    super();
  }

  public getArticles(id?: number) {
    const url = id ? `${MAIN_URL}/${URL_ENUM.ARTICLES}/${id}` :  `${MAIN_URL}/${URL_ENUM.ARTICLES}`;

    const request$ = this.http.get(url, {});

    return this.httpSender(request$);
  }
}
