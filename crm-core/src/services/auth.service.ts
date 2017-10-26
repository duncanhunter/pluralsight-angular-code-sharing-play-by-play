import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(credentials): Observable<any> {
    console.log('service');
    debugger;
    return Observable.fromPromise(
      this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
    );
  }

  logout() {
    return Observable.fromPromise(this.afAuth.auth.signOut());
  }

}
