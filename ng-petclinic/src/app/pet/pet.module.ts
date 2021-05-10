import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetListComponent } from './pet-list/pet-list.component';
import { PetService } from './pet.service';
import { PetRouterModule } from './pet-routing.module';
import { PetDetailComponent } from './detail/pet-detail.component';
import { SharedModule } from '../shared/shared.module';
import { NewPetComponent } from './new/new-pet.component';
import { FormsModule } from '@angular/forms';
import { PetEditComponent } from './edit/pet-edit.component';
import { PetDeleteComponent } from './delete/pet-delete.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+store';
import { EffectsModule } from '@ngrx/effects';
import { PetListEffects } from './+store/effects';

@NgModule({
  declarations: [
    PetListComponent,
    PetDetailComponent,
    NewPetComponent,
    PetEditComponent,
    PetDeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PetRouterModule,
    FormsModule,
    EffectsModule.forFeature([
      PetListEffects
    ]),
    StoreModule.forFeature('pet', reducers)
  ],
  providers: [
    PetService,
    PetListEffects
  ],
  exports: [
    PetListComponent,
  ]
})
export class PetModule { }
