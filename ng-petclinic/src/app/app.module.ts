import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { UserService } from './user.service';
import { storageServiceProvider } from './storage.service';
import { AppointmentService } from './appointment.service';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PatientsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    AppointmentService,
    storageServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
