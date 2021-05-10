import { createAction, props } from '@ngrx/store';
import { IPet } from 'src/app/shared/interfaces';

const petDetailNamespace = `[PET DETAIL]`;

export const petDetailSetPet = createAction(`${petDetailNamespace} Set Pet`, props<{ pet: IPet }>());
export const petDetailSetIsLoading = createAction(`${petDetailNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const petDetailClear = createAction(`${petDetailNamespace} Clear`);

const petListNamespace = `[PET LIST]`;

export const petListSetIsLoading = createAction(`${petListNamespace} Set Is Loading`, props<{ isLoading: boolean }>());

export const petListLoadPetList = createAction(`${petListNamespace} Load Pet List`);
export const petListPetListLoadError = createAction(`${petListNamespace} Load Pet List Error`, props<{ error: string }>());
export const petListSetPetList = createAction(`${petListNamespace} Set Pet List`, props<{ petList: IPet[] }>());

export const petListClear = createAction(`${petListNamespace} Clear`);
