import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user$: Observable<User>;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.user$ = this.auth.user$;
  }

  logout() {
    this.auth.logout();
  }
}
