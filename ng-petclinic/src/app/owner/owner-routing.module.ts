import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { OwnerDeleteComponent } from './delete/owner-delete.component';
import { OwnerDetailComponent } from './detail/owner-detail.component';
import { OwnerEditComponent } from './edit/owner-edit.component';
import { NewOwnerComponent } from './new/new-owner.component';
import { OwnerListComponent } from './owner-list/owner-list.component';

const routes: Routes = [
  {
    path: 'owner',
    canActivateChild: [AuthGuard],
    children : [
      {
        path: '',
        pathMatch: 'full',
        component: OwnerListComponent,
        data: {
          title: 'OWNERS'
        }
      },
      {
        path: 'new',
        component: NewOwnerComponent,
        data: {
          title: 'NEW OWNER',
          isLogged: true
        }
      },
      {
        path: 'detail/:id',
        component: OwnerDetailComponent,
        data: {
          title: 'OWNER DETAIL',
          isLogged: true
        }
      },
      {
        path: 'edit/:id',
        component: OwnerEditComponent,
        data: {
          title: 'OWNER EDIT',
          isLogged: true
        }
      },
      {
        path: 'delete/:id',
        component: OwnerDeleteComponent,
        data: {
          title: 'OWNER DELETE',
          isLogged: true
        }
      }
    ]
  },
];

export const OwnerRouterModule = RouterModule.forChild(routes);