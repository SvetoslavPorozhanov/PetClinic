import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetListComponent } from './pet-list/pet-list.component';
import { PetService } from './pet.service';
import { PetRouterModule } from './pet-routing.module';
import { PetDetailComponent } from './detail/pet-detail.component';
import { SharedModule } from '../shared/shared.module';
import { NewPetComponent } from './new/new-pet.component';

@NgModule({
  declarations: [
    PetListComponent,
    PetDetailComponent,
    NewPetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PetRouterModule
  ],
  providers: [
    PetService
  ],
  exports: [
    PetListComponent,
  ]
})
export class PetModule { }
