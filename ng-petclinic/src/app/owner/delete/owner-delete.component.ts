import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOwner } from 'src/app/shared/interfaces';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-delete',
  templateUrl: './owner-delete.component.html',
  styleUrls: ['./owner-delete.component.css']
})
export class OwnerDeleteComponent implements OnInit {

  owner: IOwner = null;

  constructor(
    private ownerService: OwnerService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    const id = activatedRoute.snapshot.params.id;
    ownerService.loadOwner(id).subscribe(owner => {
      this.owner = owner;
    });
  }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    // const id = activatedRoute.snapshot.params.id;
    this.ownerService.deleteOwner(this.owner._id).subscribe({
      next: () => {
        this.router.navigate(['/owner']);
        // this.router.navigate([`/pet/detail/{{this.pet._id}}`]);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
