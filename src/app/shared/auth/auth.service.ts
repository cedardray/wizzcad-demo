import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/User';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user$: BehaviorSubject<User> = new BehaviorSubject(null);
  public readonly user$: Observable<User> = this._user$.asObservable();

  private authenticated = false;

  constructor(private http: HttpClient, private router: Router) { }

  login(user: User) {
    this.http.get(`${environment.wizzcad_url}/logins?login=${user.login}&password=${user.password}`).subscribe(
      (result: User[]) => {
        if (result && result.length > 0) {
          this.authenticated = true;
          this._user$.next(new User(result[0]));

          this.router.navigate(['/content']);
        }
      }
    );
  }

  logout() {
    this.authenticated = false;
    this._user$.next(null);
    this.router.navigate(['/login']);
  }

  isAuth() {
    return this.authenticated;
  }
}
