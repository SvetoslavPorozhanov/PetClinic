import { createReducer, on } from '@ngrx/store';
import { IPet } from 'src/app/shared/interfaces';
import {
  appointmentListClear,
  appointmentListLoadAppointmentList,
  appointmentListSetIsLoading,
  appointmentListSetAppointmentList
} from './actions';

export interface IAppointmentListState {
  appointmentList: IPet[] | null;
  isLoading: boolean;
}

export const initialAppointmentListState: IAppointmentListState = {
  appointmentList: null,
  isLoading: false
};

export const appointmentListReducer = createReducer<IAppointmentListState>(
  initialAppointmentListState,
  on(appointmentListSetAppointmentList, (state, action) => {
    const isLoading = action.appointmentList !== null ? false : state.isLoading;
    return { ...state, appointmentList: action.appointmentList, isLoading };
  }),
  on(appointmentListSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(appointmentListLoadAppointmentList, (state) => {
    return { ...state, isLoading: true };
  }),
  on(appointmentListClear, () => initialAppointmentListState)
);
