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




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PatientsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    storageServiceProvider,
    AuthGuard,
    appInterceptorProvider,
    AuthService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PatientsListComponent,
  ]
})
export class CoreModule { }
