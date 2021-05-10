import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { IPet } from '../../shared/interfaces';
import { Store } from '@ngrx/store';
import { IPetModuleState } from '../+store';
import { petListClear, petListLoadPetList } from '../+store/actions';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements AfterViewInit, OnDestroy {

  petList$ = this.store.select(state => state.pet.list.petList);
  isLoading$ = this.store.select(state => state.pet.list.isLoading);

  constructor(private store: Store<IPetModuleState>) {
    this.store.dispatch(petListLoadPetList());
  }

  ngAfterViewInit(): void {
    console.log('View was initialized');
  }

  ngOnDestroy(): void {
    this.store.dispatch(petListClear());
  }
}
