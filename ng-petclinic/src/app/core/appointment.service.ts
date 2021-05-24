import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPet } from '../shared/interfaces';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class AppointmentService {

  constructor(private http: HttpClient) { }

  loadAppointmentsList(): Observable<IPet[]> {
    return this.http.get<IPet[]>(`/pets`);
  }

  findByName(name: string): Observable<any> {
    return this.http.get(`/pets?petName=${name}`);
  }
}
