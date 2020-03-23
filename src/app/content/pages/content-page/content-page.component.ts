import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs/operators'

import { AuthService } from 'src/app/shared/auth/auth.service';
import { DataService } from '../../shared/data.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/User';
import { Link } from '../../shared/link';
import { Data } from '../../shared/data';

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {

  data$: Observable<Data>;
  links$: Observable<Link>;
  constructor(private authService: AuthService, private dataService: DataService) { }

  ngOnInit() {
    this.data$ = this.authService.user$.pipe(
      switchMap((user) => {
        return this.dataService.getDataForUser(user);
      })
    );

    this.links$ = this.dataService.links$;
  }

  onGoTo(page: number) {
    this.dataService.goTo(page);
  }

}
