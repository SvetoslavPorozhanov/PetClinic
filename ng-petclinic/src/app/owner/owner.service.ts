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
    return this.http.get<IOwner[]>(`/owners`);
  }

  loadOwner(id: string): Observable<IOwner> {
    return this.http.get<IOwner>(`/owners/${id}`);
  }

  saveOwner(data: any): Observable<IOwner> {
    return this.http.post<IOwner>(`/owners`, data);
  }

  updateOwner(data: any, id: string): Observable<IOwner> {
    return this.http.put<IOwner>(`/owners/${id}`, data);
  }

  deleteOwner(ownerId: string): Observable<IOwner> {
    return this.http.delete<IOwner>(`/owners/${ownerId}`);
  }
}
