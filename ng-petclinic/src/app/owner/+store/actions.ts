import { createAction, props } from '@ngrx/store';
import { IOwner, IPet } from 'src/app/shared/interfaces';

const ownerDetailNamespace = `[OWNER DETAIL]`;

export const ownerDetailSetOwner = createAction(`${ownerDetailNamespace} Set Owner`, props<{ owner: IOwner }>());
export const ownerDetailSetIsLoading = createAction(`${ownerDetailNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const ownerDetailClear = createAction(`${ownerDetailNamespace} Clear`);
export const ownerDetailOwnerDetailLoadError = createAction(`${ownerDetailNamespace} Load Owner Error`, props<{ error: string }>());
export const ownerDetailLoadOwnerDetail = createAction(`${ownerDetailNamespace} Load Owner`);

const ownerDeleteNamespace = `[OWNER DELETE]`;

export const ownerDeleteSetOwner = createAction(`${ownerDeleteNamespace} Set Owner`, props<{ owner: IOwner }>());
export const ownerDeleteSetIsLoading = createAction(`${ownerDeleteNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const ownerDeleteClear = createAction(`${ownerDeleteNamespace} Clear`);
export const ownerDeleteOwnerDeleteLoadError = createAction(`${ownerDeleteNamespace} Load Owner Error`, props<{ error: string }>());
export const ownerDeleteLoadOwnerDelete = createAction(`${ownerDeleteNamespace} Load Owner`);

const ownerEditNamespace = `[Owner EDIT]`;

export const ownerEditSetOwner = createAction(`${ownerEditNamespace} Set Owner`, props<{ owner: IOwner }>());
export const ownerEditSetIsLoading = createAction(`${ownerEditNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const ownerEditClear = createAction(`${ownerEditNamespace} Clear`);
export const ownerEditOwnerEditLoadError = createAction(`${ownerEditNamespace} Load Owner Error`, props<{ error: string }>());
export const ownerEditLoadOwnerEdit = createAction(`${ownerEditNamespace} Load Owner`);

const ownerListNamespace = `[OWNER LIST]`;

export const ownerListSetIsLoading = createAction(`${ownerListNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
export const ownerListLoadOwnerList = createAction(`${ownerListNamespace} Load Owner List`);
export const ownerListOwnerListLoadError = createAction(`${ownerListNamespace} Load Owner List Error`, props<{ error: string }>());
export const ownerListSetOwnerList = createAction(`${ownerListNamespace} Set Owner List`, props<{ ownerList: IOwner[] }>());
export const ownerListClear = createAction(`${ownerListNamespace} Clear`);

// const ownerNewNamespace = `[OWNER NEW]`;

// export const ownerNewSetIsLoading = createAction(`${ownerNewNamespace} Set Is Loading`, props<{ isLoading: boolean }>());
// export const ownerNewLoadOwnerList = createAction(`${ownerNewNamespace} Load Owner List`);
// export const petNewOwnerListLoadError = createAction(`${ownerNewNamespace} Load Owner List Error`, props<{ error: string }>());
// export const petNewSetOwnerList = createAction(`${ownerNewNamespace} Set Owner List`, props<{ ownerList: IOwner[] }>());
// export const petNewClear = createAction(`${ownerNewNamespace} Clear`);
