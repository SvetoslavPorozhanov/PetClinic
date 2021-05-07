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
    return this.http.get<IPet[]>(`/pets`);
  }

  loadPet(id: string): Observable<IPet> {
    return this.http.get<IPet>(`/pets/${id}`);
  }

  savePet(data: any): Observable<IPet> {
    return this.http.post<IPet>(`/pets`, data);
  }

  updatePet(data: any, id: string): Observable<IPet> {
    return this.http.put<IPet>(`/pets/${id}`, data);
  }

  deletePet(petId: string, ownerId: string | undefined): Observable<IPet> {
    if (ownerId === undefined) {
      return this.http.delete<IPet>(`/pets/${petId}`);
    }
    return this.http.delete<IPet>(`/pets/${petId}/${ownerId}`);
  }
}
