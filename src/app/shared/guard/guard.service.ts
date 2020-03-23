import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    const isAuth = this.auth.isAuth();

    if (!isAuth) {
      this.router.navigate(['/login']);
    }

    return isAuth;
  }
}
