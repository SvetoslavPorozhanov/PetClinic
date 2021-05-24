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
import { EffectsModule } from '@ngrx/effects';
import { OwnerDeleteEffects, OwnerDetailEffects, OwnerEditEffects, OwnerListEffects } from './+store/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+store';

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
    FormsModule,
    EffectsModule.forFeature([
      OwnerListEffects,
      OwnerDetailEffects,
      OwnerEditEffects,
      // PetNewEffects,
      OwnerDeleteEffects
    ]),
    StoreModule.forFeature('owner', reducers)
  ],
  providers: [
    OwnerService,
    OwnerListEffects,
    OwnerDetailEffects,
    OwnerEditEffects,
    // PetNewEffects,
    OwnerDeleteEffects
  ],
  exports: [
    OwnerListComponent,
  ]
})
export class OwnerModule { }
