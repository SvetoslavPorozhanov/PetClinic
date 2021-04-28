import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { storageServiceProvider } from './storage.service';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PatientsListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    storageServiceProvider,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PatientsListComponent,
  ]
})
export class CoreModule { }
