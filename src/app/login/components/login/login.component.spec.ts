import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginModule } from '../../login.module';

import * as _ from 'lodash';
import { FormControl, Form } from '@angular/forms';
import { User } from '../../../shared/User';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LoginModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('inputs should be required', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(component.loginForm.invalid).toBeTruthy();
    expect(button.disabled).toBeTruthy();

    component.loginForm.controls.login.setValue('login');
    component.loginForm.controls.password.setValue('password');

    expect(component.loginForm.valid).toBeTruthy();

    fixture.detectChanges();

    expect(button.disabled).toBeFalsy();

  });

  it('should send login event', () => {
    spyOn(component.login, 'emit');

    component.loginForm.controls.login.setValue('login');
    component.loginForm.controls.password.setValue('password');

    component.onSubmit();

    expect(component.login.emit).toHaveBeenCalledWith(new User({ login: 'login', password: 'password' }));
  });

});
