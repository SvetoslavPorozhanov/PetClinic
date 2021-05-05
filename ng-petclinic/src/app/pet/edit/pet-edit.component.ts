import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPet } from 'src/app/shared/interfaces';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  pet: IPet = null;

  constructor(
    private petService: PetService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = activatedRoute.snapshot.params.id;
    this.petService.loadPet(id).subscribe(pet => {
      this.pet = pet;
    });
  }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    // const id = activatedRoute.snapshot.params.id;
    this.petService.updatePet(data, this.pet._id).subscribe({
      next: () => {
        this.router.navigate(['/pet']);
        // this.router.navigate([`/pet/detail/{{this.pet._id}}`]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
