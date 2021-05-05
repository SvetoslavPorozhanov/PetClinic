import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

  constructor(
    private petService: PetService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    this.petService.savePet(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/pet']);
        },
        error: (err) => {

        }
      });
  }
}
