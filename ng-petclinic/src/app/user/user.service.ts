import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/interfaces';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from '../core/auth.service';

const apiUrl = environment.apiUrl;

@Injectable()
export class UserService {

  currentUser: IUser | null;

  get isLogged(): boolean { return !!this.currentUser; }

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getCurrentUserProfile(): Observable<any> {
    return this.http.get(`/users/profile`).pipe(
      tap((user: IUser) => this.authService.updateCurrentUser(user))
    );
  }

  updateProfile(data: any): Observable<IUser> {
    return this.http.put(`/users/profile`, data).pipe(
      tap((user: IUser) => this.authService.updateCurrentUser(user))
    );
  }
}
