import { Component, Input, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { IPet } from '../../shared/interfaces';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  petList: IPet[];

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.petService.loadPetList().subscribe(petList => {
      this.petList = petList;
    });
  }

}
