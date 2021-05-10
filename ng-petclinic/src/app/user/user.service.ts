import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';
import { Store } from '@ngrx/store';
import { IRootState } from '../+store';
import { updateUser } from '../+store/actions';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient,
    private store: Store<IRootState>
  ) { }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`/users/profile`).pipe(
      tap((user: IUser) => this.store.dispatch(updateUser({ user })))
    );
  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.put(`/users/profile`, data).pipe(
      tap((user: IUser) => this.store.dispatch(updateUser({ user })))
    );
  }
}
