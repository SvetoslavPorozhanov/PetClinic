import { ActionReducerMap } from '@ngrx/store';
import { IRootState } from 'src/app/+store';
import { IOwnerListState, IPetDeleteState, IPetDetailState, IPetEditState, IPetListState, petDeleteReducer, petDetailReducer, petEditReducer, petListReducer, petNewReducer } from './reducers';


export interface IPetState {
  readonly list: IPetListState;
  readonly detail: IPetDetailState;
  readonly edit: IPetEditState;
  readonly new: IOwnerListState;
  readonly delete: IPetDeleteState;
}

export interface IPetModuleState extends IRootState {
  pet: IPetState;
}

export const reducers: ActionReducerMap<IPetState> = {
  list: petListReducer,
  detail: petDetailReducer,
  edit: petEditReducer,
  new: petNewReducer,
  delete: petDeleteReducer
};
