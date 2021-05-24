import { ActionReducerMap } from '@ngrx/store';
import { IRootState } from 'src/app/+store';
import { IOwnerListState, IOwnerDeleteState, IOwnerDetailState, IOwnerEditState, ownerListReducer, ownerDeleteReducer, ownerDetailReducer, ownerEditReducer } from './reducers';


export interface IOwnerState {
  readonly list: IOwnerListState;
  readonly detail: IOwnerDetailState;
  readonly edit: IOwnerEditState;
  // readonly new: IOwnerListState;
  readonly delete: IOwnerDeleteState;
}

export interface IOwnerModuleState extends IRootState {
  owner: IOwnerState;
}

export const reducers: ActionReducerMap<IOwnerState> = {
  list: ownerListReducer,
  detail: ownerDetailReducer,
  edit: ownerEditReducer,
  // new: petNewReducer,
  delete: ownerDeleteReducer
};
