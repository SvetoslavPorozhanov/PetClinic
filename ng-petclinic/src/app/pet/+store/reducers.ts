import { createReducer, on } from '@ngrx/store';
import { IPet } from 'src/app/shared/interfaces';
import {
  petDetailClear,
  petDetailSetIsLoading,
  petDetailSetPet,
  petListClear,
  petListLoadPetList,
  petListSetIsLoading,
  petListSetPetList
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
  on(petListClear, () => initialPetListState)
);
