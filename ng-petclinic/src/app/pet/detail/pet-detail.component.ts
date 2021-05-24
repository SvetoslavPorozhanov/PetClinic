import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPet } from 'src/app/shared/interfaces';
import { IPetModuleState } from '../+store';
import { petDetailClear, petDetailSetPet } from '../+store/actions';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit, OnDestroy {

  pet$ = this.store.select(state => state.pet.detail.pet);
  isLoading$ = this.store.select(state => state.pet.detail.isLoading);
  ownerId$ = this.store.select(state => state.pet.detail.pet.ownerId._id);

  constructor(
    petService: PetService,
    activatedRoute: ActivatedRoute,
    private store: Store<IPetModuleState>,
  ) {
    const id = activatedRoute.snapshot.params.id;
    petService.loadPet(id).subscribe(pet => {
      this.store.dispatch(petDetailSetPet({ pet }));
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(petDetailClear());
  }
}
