import { ActionReducerMap } from '@ngrx/store';
import { IRootState } from 'src/app/+store';
import { IAppointmentListState, appointmentListReducer } from './reducers';


export interface IAppointmentState {
  readonly list: IAppointmentListState;
  
}

export interface IAppointmentModuleState extends IRootState {
  appointment: IAppointmentState;
}

export const reducers: ActionReducerMap<IAppointmentState> = {
  list: appointmentListReducer
};
