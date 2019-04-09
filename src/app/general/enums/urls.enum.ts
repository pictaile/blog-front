import {environment} from '../../../environments/environment';

export const MAIN_URL = `${environment.url}/api`;

export enum URL_ENUM {
  ARTICLES = 'articles',
  ARTICLE = 'article',
  SAVE = 'save'
}
