import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';

import * as parse from 'parse-link-header';

import { User } from 'src/app/shared/User';
import { environment } from 'src/environments/environment';
import { Data } from './data';
import { Link } from './link';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private DEFAULT_LIMIT = 10;

  private _data$: BehaviorSubject<Data> = new BehaviorSubject(null);
  private readonly data$: Observable<Data> = this._data$.asObservable();

  private _links$: BehaviorSubject<Link> = new BehaviorSubject(null);
  public readonly links$: Observable<Link> = this._links$.asObservable();

  private user: User;

  constructor(private http: HttpClient) { }

  getDataForUser(user: User) {
    if (user) {
      this.user = user;
      this.goTo();
    } else {
      this.emptyData();
    }


    return this.data$;
  }

  emptyData() {
    this._links$.next(null);
    this._data$.next(null);
  }

  goTo(page: number = 1) {
    this.http.get(`${environment.wizzcad_url}/${this.user.token}?_limit=${this.DEFAULT_LIMIT}&_page=${page}`, { observe: 'response' })
      .pipe(
        tap(
          (response) => {
            const link = parse(response.headers.get('Link'));

            if (link) {
              this._links$.next(new Link(link));
            }

          }
        ),
        map(
          (response) => {
            return (response.body as any).map(value => new Data(value));
          }
        )
      )
      .subscribe(
        (data) => this._data$.next(data)
      );
  }
}
