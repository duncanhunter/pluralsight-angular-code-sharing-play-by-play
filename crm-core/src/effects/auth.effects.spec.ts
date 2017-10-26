import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { marbles } from 'rxjs-marbles';
import { provideMockActions } from '@ngrx/effects/testing';

import { AuthEffects } from '../effects/auth.effects';
import { AuthService } from '../services/auth.service';
import * as authActions from '../actions/auth.actions';

describe('AuthEffects', () => {
  let authEffects: AuthEffects;
  let actions: Observable<any>;
  let authService: AuthService;
  let httpClient: HttpClient;

   beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        AuthEffects,
        AuthService,
        provideMockActions(() => actions),
     ]
   });

    authEffects = TestBed.get(AuthEffects);
    authService = TestBed.get(AuthService);
    httpClient = TestBed.get(HttpClient);
   });

  describe('auth$', () => {

    it('should work', marbles((m) => {
         jest.spyOn(authService, 'get')
         .mockReturnValue(Observable.of([]));

         const loadAction = new authActions.LoadAction();
         actions = m.hot('--a-', { a: loadAction });

         const loadSuccessAction = new authActions.LoadSuccessAction([]);
         const result = m.cold('--b', { b: { ...loadSuccessAction } });

         m.expect(authEffects.get$).toBeObservable(result);
     }));
    });
});
