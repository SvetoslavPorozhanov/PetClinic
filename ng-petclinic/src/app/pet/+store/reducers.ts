import { createReducer, on } from '@ngrx/store';
import { IOwner, IPet } from 'src/app/shared/interfaces';
import {
  petDeleteClear,
  petDeleteSetIsLoading,
  petDeleteSetPet,
  petDetailClear,
  petDetailSetIsLoading,
  petDetailSetPet,
  petEditClear,
  petEditLoadOwnerList,
  petEditSetIsLoading,
  petEditSetOwnerList,
  petEditSetPet,
  petListClear,
  petListLoadPetList,
  petListSetIsLoading,
  petListSetPetList,
  petNewClear,
  petNewLoadOwnerList,
  petNewSetIsLoading,
  petNewSetOwnerList
} from './actions';

export interface IPetDetailState {
  pet: IPet | null;
  isLoading: boolean;
}

export const initialPetDetailState: IPetDetailState = {
  pet: null,
  isLoading: false
};

export const petDetailReducer = createReducer<IPetDetailState>(
  initialPetDetailState,
  on(petDetailSetPet, (state, action) => {
    return { ...state, pet: action.pet };
  }),
  on(petDetailSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(petDetailClear, () => initialPetDetailState)
);

export interface IPetDeleteState {
  pet: IPet | null;
  isLoading: boolean;
}

export const initialPetDeleteState: IPetDeleteState = {
  pet: null,
  isLoading: false
};

export const petDeleteReducer = createReducer<IPetDeleteState>(
  initialPetDeleteState,
  on(petDeleteSetPet, (state, action) => {
    return { ...state, pet: action.pet };
  }),
  on(petDeleteSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(petDeleteClear, () => initialPetDeleteState)
);

export interface IPetEditState {
  ownerList: IOwner[] | null;
  pet: IPet | null;
  isLoading: boolean;
}

export const initialPetEditState: IPetEditState = {
  ownerList: null,
  pet: null,
  isLoading: false
};

export const petEditReducer = createReducer<IPetEditState>(
  initialPetEditState,
  on(petEditSetPet, (state, action) => {
    const isLoading = action.pet !== null ? false : state.isLoading;
    return { ...state, pet: action.pet, isLoading };
  }),
  on(petEditSetOwnerList, (state, action) => {
    const isLoading = action.ownerList !== null ? false : state.isLoading;
    return { ...state, ownerList: action.ownerList, isLoading };
  }),
  on(petEditSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(petEditLoadOwnerList, (state) => {
    return { ...state, isLoading: true };
  }),
  on(petEditClear, () => initialPetEditState),
);

export interface IPetListState {
  petList: IPet[] | null;
  isLoading: boolean;
}

export const initialPetListState: IPetListState = {
  petList: null,
  isLoading: false
};

export const petListReducer = createReducer<IPetListState>(
  initialPetListState,
  on(petListSetPetList, (state, action) => {
    const isLoading = action.petList !== null ? false : state.isLoading;
    return { ...state, petList: action.petList, isLoading };
  }),
  on(petListSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(petListLoadPetList, (state) => {
    return { ...state, isLoading: true };
  }),
  on(petListClear, () => initialPetListState),
  
);

export interface IOwnerListState {
  ownerList: IOwner[] | null;
  isLoading: boolean;
}

export const initialOwnerListState: IOwnerListState = {
  ownerList: null,
  isLoading: false
};

export const petNewReducer = createReducer<IOwnerListState>(
  initialOwnerListState,
  on(petNewSetOwnerList, (state, action) => {
    const isLoading = action.ownerList !== null ? false : state.isLoading;
    return { ...state, ownerList: action.ownerList, isLoading };
  }),
  on(petNewSetIsLoading, (state, action) => {
    return { ...state, isLoading: action.isLoading };
  }),
  on(petNewLoadOwnerList, (state) => {
    return { ...state, isLoading: true };
  }),
  on(petNewClear, () => initialOwnerListState)
);
