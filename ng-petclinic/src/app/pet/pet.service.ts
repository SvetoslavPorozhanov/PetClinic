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
    return this.http.get<IPet[]>(`${apiUrl}/pets`);
  }

  loadPet(id: string): Observable<IPet> {
    return this.http.get<IPet>(`${apiUrl}/pets/${id}`);
  }

  

}
