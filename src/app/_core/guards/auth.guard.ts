import { AuthenticationService } from './../authentication/authentication.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      return this.router.navigate(['auth/login']);
    }

    return true;
  }
}
