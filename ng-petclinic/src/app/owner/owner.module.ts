import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { OwnerRouterModule } from './owner-routing.module';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerService } from './owner.service';
import { OwnerDetailComponent } from './detail/owner-detail.component';
import { NewOwnerComponent } from './new/new-owner.component';
import { OwnerEditComponent } from './edit/owner-edit.component';
import { OwnerDeleteComponent } from './delete/owner-delete.component';

@NgModule({
  declarations: [
    OwnerListComponent,
    OwnerDetailComponent,
    NewOwnerComponent,
    OwnerEditComponent,
    OwnerDeleteComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OwnerRouterModule,
    FormsModule
  ],
  providers: [
    OwnerService
  ],
  exports: [
    OwnerListComponent,
  ]
})
export class OwnerModule { }
