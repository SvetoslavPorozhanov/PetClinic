import { ActionReducerMap } from '@ngrx/store';
import { IRootState } from 'src/app/+store';
import { IPetDetailState, IPetListState, petDetailReducer, petListReducer } from './reducers';


export interface IPetState {
  readonly list: IPetListState;
  readonly detail: IPetDetailState;
}

export interface IPetModuleState extends IRootState {
  pet: IPetState;
}

export const reducers: ActionReducerMap<IPetState> = {
  list: petListReducer,
  detail: petDetailReducer
};
