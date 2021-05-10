import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PetService } from '../pet.service';
import {
  petListLoadPetList,
  petListSetPetList,
  petListPetListLoadError
} from './actions';

@Injectable()
export class PetListEffects {

  constructor(
    private actions$: Actions,
    private petService: PetService,
  ) { }

  loadPetList$ = createEffect(() => this.actions$.pipe(
    ofType(petListLoadPetList),
    switchMap(() => this.petService.loadPetList().pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      petListPetListLoadError({ error: result.message }) :
      petListSetPetList({ petList: result })
    )
  ));

}
