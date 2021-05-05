import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { PetDeleteComponent } from './delete/pet-delete.component';
import { PetDetailComponent } from './detail/pet-detail.component';
import { PetEditComponent } from './edit/pet-edit.component';
import { NewPetComponent } from './new/new-pet.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  {
    path: 'pet',
    canActivateChild: [AuthGuard],
    children : [
      {
        path: '',
        pathMatch: 'full',
        component: PetListComponent,
        data: {
          title: 'PETS'
        }
      },
      {
        path: 'new',
        component: NewPetComponent,
        data: {
          title: 'NEW PET',
          isLogged: true
        }
      },
      {
        path: 'detail/:id',
        component: PetDetailComponent,
        data: {
          title: 'PET DETAIL',
          isLogged: true
        }
      },
      {
        path: 'edit/:id',
        component: PetEditComponent,
        data: {
          title: 'PET EDIT',
          isLogged: true
        }
      },
      {
        path: 'delete/:id',
        component: PetDeleteComponent,
        data: {
          title: 'PET DELETE',
          isLogged: true
        }
      }
    ]
  },
];

export const PetRouterModule = RouterModule.forChild(routes);
