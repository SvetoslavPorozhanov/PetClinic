import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOwner } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class OwnerService {

  constructor(private http: HttpClient) { }

  loadOwnerList(): Observable<IOwner[]> {
    return this.http.get<IOwner[]>(`${apiUrl}/owners`, { withCredentials: true });
  }

  loadOwner(id: string): Observable<IOwner> {
    return this.http.get<IOwner>(`${apiUrl}/owners/${id}`, { withCredentials: true });
  }

  saveOwner(data: any): Observable<IOwner> {
    return this.http.post<IOwner>(`${apiUrl}/owners`, data, { withCredentials: true });
  }

  updateOwner(data: any, id: string): Observable<IOwner> {
    return this.http.put<IOwner>(`${apiUrl}/owners/${id}`, data, { withCredentials: true });
  }

  deleteOwner(ownerId: string): Observable<IOwner> {
    return this.http.delete<IOwner>(`${apiUrl}/owners/${ownerId}`, { withCredentials: true });
  }
}
