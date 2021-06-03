import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IPetModuleState } from '../+store';
import { petNewClear, petNewLoadOwnerList } from '../+store/actions';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit, OnDestroy {

  ownerList$ = this.store.select(state => state.pet.new.ownerList);
  isLoading$ = this.store.select(state => state.pet.new.isLoading);

  constructor(
    private petService: PetService,
    private router: Router,
    private store: Store<IPetModuleState>,
  ) { 
    this.store.dispatch(petNewLoadOwnerList());
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.store.dispatch(petNewClear());
  }

  submitHandler(data: any): void {
    this.petService.savePet(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/pet']);
          console.log(data);
        },
        error: (err) => {
          window.alert(err.message);
        }
      });
  }
}
