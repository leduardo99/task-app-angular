import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from './../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class SecureInnerPagesGuard implements CanActivate {
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn) {
      window.alert('You are not allowed to access this URL!');
      this.router.navigate(['todo']);
    }

    return true;
  }
}
