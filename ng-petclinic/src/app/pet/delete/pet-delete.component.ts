import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPet } from 'src/app/shared/interfaces';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-delete',
  templateUrl: './pet-delete.component.html',
  styleUrls: ['./pet-delete.component.css']
})
export class PetDeleteComponent implements OnInit {

  pet: IPet = null;

  constructor(
    private petService: PetService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = activatedRoute.snapshot.params.id;
    petService.loadPet(id).subscribe(pet => {
      this.pet = pet;
    });
  }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    // const id = activatedRoute.snapshot.params.id;
    this.petService.deletePet(this.pet._id, this.pet.ownerId?._id).subscribe({
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
