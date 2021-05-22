import { createAction, props } from '@ngrx/store';
import { IPet } from 'src/app/shared/interfaces';

const appointmentListNamespace = `[APPOINTMENT LIST]`;

export const appointmentListSetIsLoading = createAction(`${appointmentListNamespace} Set Is Loading`, props<{ isLoading: boolean }>());

export const appointmentListLoadAppointmentList = createAction(`${appointmentListNamespace} Load Appointment List`);
export const appointmentListAppointmentListLoadError = createAction(`${appointmentListNamespace} Load Appointment List Error`, props<{ error: string }>());
export const appointmentListSetAppointmentList = createAction(`${appointmentListNamespace} Set Appointment List`, props<{ appointmentList: IPet[] }>());

export const appointmentListClear = createAction(`${appointmentListNamespace} Clear`);
