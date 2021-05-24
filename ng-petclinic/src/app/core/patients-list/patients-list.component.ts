import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { IPet } from '../../shared/interfaces';
import { IAppointmentModuleState } from '../+store';
import { Store } from '@ngrx/store';
import { appointmentListClear, appointmentListLoadAppointmentList } from '../+store/actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements AfterViewInit, OnDestroy {

  convertFromStringToDate(responseDate) {
    let dateComponents = responseDate.split(' ');
    let datePieces = dateComponents[0].split(".");
    let timePieces = dateComponents[1].split(":");
    return(new Date(datePieces[2], (datePieces[0] - 1), datePieces[1],
                         timePieces[0], timePieces[1]))
};

  appointmentList$ = this.store.select(state => state.appointment.list.appointmentList);
  isLoading$ = this.store.select(state => state.appointment.list.isLoading);
  allPetsWithAppointmentTime$ = this.appointmentList$.pipe(map(pet => pet.filter(p => !!p.appointmentTime)));
  countOfAllPetsWithAppointmentTime$ = this.allPetsWithAppointmentTime$.pipe(map(pet => pet.length));
  countOfWaitingPetsWithAppointmentTime$ = this.allPetsWithAppointmentTime$.pipe(map(pet => pet.filter(p => this.convertFromStringToDate(p.appointmentTime) > new Date()).length));
  countOfExaminedPetsWithAppointmentTime$ = this.allPetsWithAppointmentTime$.pipe(map(pet => pet.filter(p => this.convertFromStringToDate(p.appointmentTime) <= new Date()).length));

  constructor(private store: Store<IAppointmentModuleState>) {
    this.store.dispatch(appointmentListLoadAppointmentList());
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }

  ngOnDestroy(): void {
    this.store.dispatch(appointmentListClear());
  }
}
