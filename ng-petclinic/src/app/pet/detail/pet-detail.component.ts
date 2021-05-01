import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPet } from 'src/app/shared/interfaces';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  pet: IPet = null;

  constructor(
    petService: PetService,
    activatedRoute: ActivatedRoute
  ) {
    const id = activatedRoute.snapshot.params.id;
    petService.loadPet(id).subscribe(pet => {
      this.pet = pet;
    });
  }

  ngOnInit(): void {
  }

}
