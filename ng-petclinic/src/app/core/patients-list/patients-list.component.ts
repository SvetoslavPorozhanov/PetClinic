import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { IPet } from '../../shared/interfaces';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  petList: IPet[];

  constructor(private appoitmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appoitmentService.loadAppointmentsList().subscribe(petList => {
      this.petList = petList;
    });
  }

}
