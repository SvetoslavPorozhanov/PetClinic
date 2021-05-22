import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AppointmentService } from '../appointment.service';
import {
  appointmentListLoadAppointmentList,
  appointmentListSetAppointmentList,
  appointmentListAppointmentListLoadError
} from './actions';

@Injectable()
export class AppointmentListEffects {

  constructor(
    private actions$: Actions,
    private petService: AppointmentService,
  ) { }

  loadPetList$ = createEffect(() => this.actions$.pipe(
    ofType(appointmentListLoadAppointmentList),
    switchMap(() => this.petService.loadAppointmentsList().pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      appointmentListAppointmentListLoadError({ error: result.message }) :
      appointmentListSetAppointmentList({ appointmentList: result })
    )
  ));

}
