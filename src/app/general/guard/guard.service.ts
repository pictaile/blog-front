import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor( private oauthService: OAuthService, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    if (this.oauthService.getAccessToken()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
