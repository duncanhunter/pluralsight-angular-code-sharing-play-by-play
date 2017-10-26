import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';
import { LoginAction, LogoutAction} from 'crm-core'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user$: Observable<firebase.User>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    public navCtrl: NavController
  ) {
    this.loading$ = this.store.select(s => s.auth.loading);
    this.user$ = this.store.select(s => s.auth.result);
  }

  login() {
    this.store.dispatch(new LoginAction({ email: 'duncan@duncanhunter.com.au', password: '123456' }));
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

}
