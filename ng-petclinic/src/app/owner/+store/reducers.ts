import { createReducer, on } from '@ngrx/store';
import { IOwner, IPet } from 'src/app/shared/interfaces';
import {
  ownerDeleteClear,
  ownerDeleteSetIsLoading,
  ownerDeleteSetOwner,
  ownerDetailClear,
  ownerDetailSetIsLoading,
  ownerDetailSetOwner,
  ownerEditClear,
  ownerEditSetIsLoading,
  ownerEditSetOwner,
  ownerListClear,
  ownerListLoadOwnerList,
  ownerListSetIsLoading,
  ownerListSetOwnerList,
  // petNewClear,
  // petNewLoadOwnerList,
  // petNewSetIsLoading,
  // petNewSetOwnerList
} from './actions';

export interface IOwnerDetailState {
  owner: IOwner | null;
  isLoading: boolean;
}

export const initialOwnerDetailState: IOwnerDetailState = {
  owner: null,
  isLoading: false
};

export const ownerDetailReducer = createReducer<IOwnerDetailState>(
  initialOwnerDetailState,
  on(ownerDetailSetOwner, (state, action) => {
    return { ...state, owner: action.owner };
  }),
  on(ownerDetailSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(ownerDetailClear, () => initialOwnerDetailState)
);

export interface IOwnerDeleteState {
  owner: IOwner | null;
  isLoading: boolean;
}

export const initialOwnerDeleteState: IOwnerDeleteState = {
  owner: null,
  isLoading: false
};

export const ownerDeleteReducer = createReducer<IOwnerDeleteState>(
  initialOwnerDeleteState,
  on(ownerDeleteSetOwner, (state, action) => {
    return { ...state, pet: action.owner };
  }),
  on(ownerDeleteSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(ownerDeleteClear, () => initialOwnerDeleteState)
);

export interface IOwnerEditState {
  owner: IOwner | null;
  isLoading: boolean;
}

export const initialOwnerEditState: IOwnerEditState = {
  owner: null,
  isLoading: false
};

export const ownerEditReducer = createReducer<IOwnerEditState>(
  initialOwnerEditState,
  on(ownerEditSetOwner, (state, action) => {
    const isLoading = action.owner !== null ? false : state.isLoading;
    return { ...state, pet: action.owner, isLoading };
  }),
  on(ownerEditSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(ownerEditClear, () => initialOwnerEditState),
);

export interface IOwnerListState {
  ownerList: IOwner[] | null;
  isLoading: boolean;
}

export const initialOwnerListState: IOwnerListState = {
  ownerList: null,
  isLoading: false
};

export const ownerListReducer = createReducer<IOwnerListState>(
  initialOwnerListState,
  on(ownerListSetOwnerList, (state, action) => {
    const isLoading = action.ownerList !== null ? false : state.isLoading;
    return { ...state, petList: action.ownerList, isLoading };
  }),
  on(ownerListSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(ownerListLoadOwnerList, (state) => {
    return { ...state, isLoading: true };
  }),
  on(ownerListClear, () => initialOwnerListState),
);



// export const petNewReducer = createReducer<IOwnerListState>(
//   initialOwnerListState,
//   on(petNewSetOwnerList, (state, action) => {
//     const isLoading = action.ownerList !== null ? false : state.isLoading;
//     return { ...state, ownerList: action.ownerList, isLoading };
//   }),
//   on(petNewSetIsLoading, (state, action) => {
//     return { ...state, isLoading: action.isLoading };
//   }),
//   on(petNewLoadOwnerList, (state) => {
//     return { ...state, isLoading: true };
//   }),
//   on(petNewClear, () => initialOwnerListState)
// );
