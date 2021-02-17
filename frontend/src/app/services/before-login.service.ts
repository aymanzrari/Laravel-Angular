import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenServiceService } from './token-service.service';


@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return !this.token.loggedIn();
  }
  constructor(private token: TokenServiceService) { }
}
