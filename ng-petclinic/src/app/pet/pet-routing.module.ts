import { Routes, RouterModule } from '@angular/router';
import { PetDetailComponent } from './detail/pet-detail.component';
import { NewPetComponent } from './new/new-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  {
    path: 'pet',
    pathMatch: 'full',
    component: PetListComponent,
    data: {
      title: 'PETS'
    }
  },
  {
    path: 'pet/new',
    component: NewPetComponent,
    data: {
      title: 'NEW PET'
    }
  },
  {
    path: 'pet/detail/:id',
    component: PetDetailComponent,
    data: {
      title: 'PET DETAIL'
    }
  }
];

export const PetRouterModule = RouterModule.forChild(routes);
