import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { IPet } from '../../shared/interfaces';
import { IAppointmentModuleState } from '../+store';
import { Store } from '@ngrx/store';
import { appointmentListClear, appointmentListLoadAppointmentList } from '../+store/actions';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements AfterViewInit, OnDestroy {

  appointmentList$ = this.store.select(state => state.appointment.list.appointmentList);
  isLoading$ = this.store.select(state => state.appointment.list.isLoading);

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
