import { createAction, props } from '@ngrx/store';
import { IOwner, IPet } from 'src/app/shared/interfaces';

const petDetailNamespace = `[PET DETAIL]`;

export const petDetailSetPet = createAction(`${petDetailNamespace} Set Pet`, props<{ pet: IPet }>());
export const petDetailSetIsLoading = createAction(`${petDetailNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const petDetailClear = createAction(`${petDetailNamespace} Clear`);
export const petDetailPetDetailLoadError = createAction(`${petDetailNamespace} Load Pet Error`, props<{ error: string }>());
export const petDetailLoadPetDetail = createAction(`${petDetailNamespace} Load Pet`);

const petDeleteNamespace = `[PET DELETE]`;

export const petDeleteSetPet = createAction(`${petDeleteNamespace} Set Pet`, props<{ pet: IPet }>());
export const petDeleteSetIsLoading = createAction(`${petDeleteNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const petDeleteClear = createAction(`${petDeleteNamespace} Clear`);
export const petDeletePetDeleteLoadError = createAction(`${petDeleteNamespace} Load Pet Error`, props<{ error: string }>());
export const petDeleteLoadPetDelete = createAction(`${petDeleteNamespace} Load Pet`);

const petEditNamespace = `[PET EDIT]`;

export const petEditSetPet = createAction(`${petEditNamespace} Set Pet`, props<{ pet: IPet }>());
export const petEditSetIsLoading = createAction(`${petEditNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const petEditClear = createAction(`${petEditNamespace} Clear`);
export const petEditPetEditLoadError = createAction(`${petEditNamespace} Load Pet Error`, props<{ error: string }>());
export const petEditLoadPetEdit = createAction(`${petEditNamespace} Load Pet`);
export const petEditLoadOwnerList = createAction(`${petEditNamespace} Load Owner List`);
export const petEditSetOwnerList = createAction(`${petEditNamespace} Set Owner List`, props<{ ownerList: IOwner[] }>());
export const petEditOwnerListLoadError = createAction(`${petEditNamespace} Load Owner Error`, props<{ error: string }>());

const petListNamespace = `[PET LIST]`;

export const petListSetIsLoading = createAction(`${petListNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const petListLoadPetList = createAction(`${petListNamespace} Load Pet List`);
export const petListPetListLoadError = createAction(`${petListNamespace} Load Pet List Error`, props<{ error: string }>());
export const petListSetPetList = createAction(`${petListNamespace} Set Pet List`, props<{ petList: IPet[] }>());
export const petListClear = createAction(`${petListNamespace} Clear`);

const petNewNamespace = `[PET NEW]`;

export const petNewSetIsLoading = createAction(`${petNewNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const petNewLoadOwnerList = createAction(`${petNewNamespace} Load Owner List`);
export const petNewOwnerListLoadError = createAction(`${petNewNamespace} Load Owner List Error`, props<{ error: string }>());
export const petNewSetOwnerList = createAction(`${petNewNamespace} Set Owner List`, props<{ ownerList: IOwner[] }>());
export const petNewClear = createAction(`${petNewNamespace} Clear`);