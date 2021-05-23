import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OwnerService } from 'src/app/owner/owner.service';
import { PetService } from '../pet.service';
import {
  petListLoadPetList,
  petListSetPetList,
  petListPetListLoadError,
  petDetailLoadPetDetail,
  petDetailPetDetailLoadError,
  petDetailSetPet,
  petEditLoadPetEdit,
  petEditPetEditLoadError,
  petEditSetPet,
  petNewLoadOwnerList,
  petNewOwnerListLoadError,
  petNewSetOwnerList,
  petEditLoadOwnerList,
  petEditOwnerListLoadError,
  petEditSetOwnerList,
  petDeleteLoadPetDelete,
  petDeletePetDeleteLoadError,
  petDeleteSetPet
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

@Injectable()
export class PetNewEffects {

  constructor(
    private actions$: Actions,
    private ownerService: OwnerService,
  ) { }

  loadOwnerList$ = createEffect(() => this.actions$.pipe(
    ofType(petNewLoadOwnerList),
    switchMap(() => this.ownerService.loadOwnerList().pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      petNewOwnerListLoadError({ error: result.message }) :
      petNewSetOwnerList({ ownerList: result })
    )
  ));
}

@Injectable()
export class PetDetailEffects {

  constructor(
    private actions$: Actions,
    private petService: PetService,
    private activatedRoute: ActivatedRoute
  ) { }

  loadPet$ = createEffect(() => this.actions$.pipe(
    ofType(petDetailLoadPetDetail),
    switchMap(() => this.petService.loadPet(this.activatedRoute.snapshot.params.id).pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      petDetailPetDetailLoadError({ error: result.message }) :
      petDetailSetPet({ pet: result })
    )
  ));
}

@Injectable()
export class PetDeleteEffects {

  constructor(
    private actions$: Actions,
    private petService: PetService,
    private activatedRoute: ActivatedRoute
  ) { }

  loadPet$ = createEffect(() => this.actions$.pipe(
    ofType(petDeleteLoadPetDelete),
    switchMap(() => this.petService.loadPet(this.activatedRoute.snapshot.params.id).pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      petDeletePetDeleteLoadError({ error: result.message }) :
      petDeleteSetPet({ pet: result })
    )
  ));
}

@Injectable()
export class PetEditEffects {

  constructor(
    private actions$: Actions,
    private petService: PetService,
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService,
  ) { }

  loadPet$ = createEffect(() => this.actions$.pipe(
    ofType(petEditLoadPetEdit),
    switchMap(() => this.petService.loadPet(this.activatedRoute.snapshot.params.id).pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      petEditPetEditLoadError({ error: result.message }) :
      petEditSetPet({ pet: result })
    ),
    
  ));

  loadOwnerList$ = createEffect(() => this.actions$.pipe(
    ofType(petEditLoadOwnerList),
    switchMap(() => this.ownerService.loadOwnerList().pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      petEditOwnerListLoadError({ error: result.message }) :
      petEditSetOwnerList({ ownerList: result })
    )
  ));
}
