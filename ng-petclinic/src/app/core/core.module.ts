import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { storageServiceProvider } from './storage.service';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { appInterceptorProvider } from './app.interceptor';
import { AuthService } from './auth.service';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AppointmentListEffects } from './+store/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './+store';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PatientsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    EffectsModule.forFeature([
      AppointmentListEffects
    ]),
    StoreModule.forFeature('appointment', reducers)
  ],
  providers: [
    storageServiceProvider,
    AuthGuard,
    appInterceptorProvider,
    AuthService,
    AppointmentListEffects
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PatientsListComponent,
  ]
})
export class CoreModule { }
