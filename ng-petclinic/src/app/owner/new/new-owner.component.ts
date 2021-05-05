import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-new-owner',
  templateUrl: './new-owner.component.html',
  styleUrls: ['./new-owner.component.css']
})
export class NewOwnerComponent implements OnInit {

  constructor(
    private ownerService: OwnerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    this.ownerService.saveOwner(data)
      .subscribe({
        next: () => {
          this.router.navigate(['/owner']);
        },
        error: (err) => {

        }
      });
  }

}
