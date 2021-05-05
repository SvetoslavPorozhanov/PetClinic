import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPet } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class PetService {

  constructor(private http: HttpClient) { }

  loadPetList(): Observable<IPet[]> {
    return this.http.get<IPet[]>(`${apiUrl}/pets`, { withCredentials: true });
  }

  loadPet(id: string): Observable<IPet> {
    return this.http.get<IPet>(`${apiUrl}/pets/${id}`, { withCredentials: true });
  }

  savePet(data: any): Observable<IPet> {
    return this.http.post<IPet>(`${apiUrl}/pets`, data, { withCredentials: true });
  }

  updatePet(data: any, id: string): Observable<IPet> {
    return this.http.put<IPet>(`${apiUrl}/pets/${id}`, data, { withCredentials: true });
  }

  deletePet(petId: string, ownerId: string | undefined): Observable<IPet> {
    if (ownerId === undefined) {
      return this.http.delete<IPet>(`${apiUrl}/pets/${petId}`, { withCredentials: true });
    }
    return this.http.delete<IPet>(`${apiUrl}/pets/${petId}/${ownerId}`, { withCredentials: true });
  }
}
