import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OwnerService } from '../owner.service';
import {
  ownerListLoadOwnerList,
  ownerListSetOwnerList,
  ownerListOwnerListLoadError,
  ownerDetailLoadOwnerDetail,
  ownerDetailOwnerDetailLoadError,
  ownerDetailSetOwner,
  ownerEditLoadOwnerEdit,
  ownerEditOwnerEditLoadError,
  ownerEditSetOwner,
  // petNewLoadOwnerList,
  // petNewOwnerListLoadError,
  // petNewSetOwnerList,
  ownerDeleteLoadOwnerDelete,
  ownerDeleteOwnerDeleteLoadError,
  ownerDeleteSetOwner
} from './actions';

@Injectable()
export class OwnerListEffects {

  constructor(
    private actions$: Actions,
    private ownerService: OwnerService,
  ) { }

  loadOwnerList$ = createEffect(() => this.actions$.pipe(
    ofType(ownerListLoadOwnerList),
    switchMap(() => this.ownerService.loadOwnerList().pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      ownerListOwnerListLoadError({ error: result.message }) :
      ownerListSetOwnerList({ ownerList: result })
    )
  ));
}

// @Injectable()
// export class PetNewEffects {

//   constructor(
//     private actions$: Actions,
//     private ownerService: OwnerService,
//   ) { }

//   loadOwnerList$ = createEffect(() => this.actions$.pipe(
//     ofType(petNewLoadOwnerList),
//     switchMap(() => this.ownerService.loadOwnerList().pipe(
//       catchError((error => [new Error('Bad Error')])))
//     ),
//     map(result => result instanceof Error ?
//       petNewOwnerListLoadError({ error: result.message }) :
//       petNewSetOwnerList({ ownerList: result })
//     )
//   ));
// }

@Injectable()
export class OwnerDetailEffects {

  constructor(
    private actions$: Actions,
    private ownerService: OwnerService,
    private activatedRoute: ActivatedRoute
  ) { }

  loadOwner$ = createEffect(() => this.actions$.pipe(
    ofType(ownerDetailLoadOwnerDetail),
    switchMap(() => this.ownerService.loadOwner(this.activatedRoute.snapshot.params.id).pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      ownerDetailOwnerDetailLoadError({ error: result.message }) :
      ownerDetailSetOwner({ owner: result })
    )
  ));
}

@Injectable()
export class OwnerDeleteEffects {

  constructor(
    private actions$: Actions,
    private ownerService: OwnerService,
    private activatedRoute: ActivatedRoute
  ) { }

  loadOwner$ = createEffect(() => this.actions$.pipe(
    ofType(ownerDeleteLoadOwnerDelete),
    switchMap(() => this.ownerService.loadOwner(this.activatedRoute.snapshot.params.id).pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      ownerDeleteOwnerDeleteLoadError({ error: result.message }) :
      ownerDeleteSetOwner({ owner: result })
    )
  ));
}

@Injectable()
export class OwnerEditEffects {

  constructor(
    private actions$: Actions,
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService,
  ) { }

  loadOwner$ = createEffect(() => this.actions$.pipe(
    ofType(ownerEditLoadOwnerEdit),
    switchMap(() => this.ownerService.loadOwner(this.activatedRoute.snapshot.params.id).pipe(
      catchError((error => [new Error('Bad Error')])))
    ),
    map(result => result instanceof Error ?
      ownerEditOwnerEditLoadError({ error: result.message }) :
      ownerEditSetOwner({ owner: result })
    ),
    
  ));
}
