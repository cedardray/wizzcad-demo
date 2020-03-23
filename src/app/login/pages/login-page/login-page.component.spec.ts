import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginPageComponent } from './login-page.component';
import { LoginModule } from '../../login.module';
import { User } from '../../../shared/User';
import { AuthService } from 'src/app/shared/auth/auth.service';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async(() => {
    const authSpy = jasmine.createSpyObj('AuthService', ['login']);

    TestBed.configureTestingModule({
      imports: [
        LoginModule,
        HttpClientTestingModule,
      ],
      providers: [
        { provide: AuthService, useValue: authSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call authentication service', () => {
    const authService: AuthService = TestBed.get(AuthService);

    const user = new User({ login: 'login', password: 'password' })
    component.onLogin(user);

    expect(authService.login).toHaveBeenCalledWith(user);

  });
});
