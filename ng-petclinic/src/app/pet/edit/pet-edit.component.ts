import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IPet } from 'src/app/shared/interfaces';
import { IPetModuleState } from '../+store';
import { petEditClear, petEditLoadOwnerList, petEditLoadPetEdit, petEditSetPet } from '../+store/actions';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit, OnDestroy {

  pet$ = this.store.select(state => state.pet.edit.pet);
  isLoading$ = this.store.select(state => state.pet.edit.isLoading);
  ownerList$ = this.store.select(state => state.pet.edit.ownerList);
  ownerId$ = this.store.select(state => state.pet.edit.pet.ownerId._id);
  // ownerId$ = this.owner$.pipe(map(o => o._id));
  // petOwner$ =  this.ownerList$.pipe(map(owners => owners.filter(owner => owner._id === this.ownerId$.pipe(map(o => o)))));
  // id = this.activatedRoute.snapshot.params.id;
  // ownerId = this.petService.loadPet(this.id).subscribe(pet => pet.ownerId);

  constructor(
    private petService: PetService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<IPetModuleState>,
  ) {
    const id = this.activatedRoute.snapshot.params.id;
    this.petService.loadPet(id).subscribe(pet => {
      this.store.dispatch(petEditSetPet({ pet }));
    });
    this.store.dispatch(petEditLoadOwnerList());
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(petEditClear());
  }

  submitHandler(data: any): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.petService.updatePet(data, id).subscribe({
      next: () => {
        this.router.navigate([`/pet/detail/${id}`]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
