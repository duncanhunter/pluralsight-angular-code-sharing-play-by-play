import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import * as authActions from '../actions/auth.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthEffects {

  @Effect() login$ = this.actions$
    .ofType(authActions.LOGIN)
    .map(toPayload)
    .switchMap(payload => this.authService.login(payload)
      .map(data => ({ type: authActions.LOGIN_SUCCESS, payload: data }))
      .catch(() => Observable.of({ type: authActions.LOGIN_FAIL }))
    );

  @Effect() logout$ = this.actions$
    .ofType(authActions.LOGOUT)
    .switchMap(payload => this.authService.logout()
      .map(data => ({ type: authActions.LOGOUT_SUCCESS, payload: data }))
      .catch(() => Observable.of({ type: authActions.LOGOUT_FAIL }))
    );

  constructor(
    private authService: AuthService,
    private actions$: Actions
  ) { }

}
