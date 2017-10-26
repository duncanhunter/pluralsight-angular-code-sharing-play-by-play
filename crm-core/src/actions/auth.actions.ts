import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAIL = '[Auth] Login Fail';
export const LOGOUT = '[Auth] logout';
export const LOGOUT_SUCCESS = '[Auth] logout Success';
export const LOGOUT_FAIL = '[Auth] logout Fail';

export class LoginAction implements Action {
  readonly type = LOGIN;
  constructor(public payload: any) { }
}

export class LoginSuccessAction implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: any) { }
}

export class LoginFailAction implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: any) { }
}
export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class LogoutSuccessAction implements Action {
  readonly type = LOGOUT_SUCCESS;
  constructor(public payload: any) { }
}

export class LogoutFailAction implements Action {
  readonly type = LOGOUT_FAIL;
  constructor(public payload: any) { }
}

export type Actions =
| LoginAction
| LoginSuccessAction
| LoginFailAction
| LogoutAction
| LogoutSuccessAction
| LogoutFailAction;
