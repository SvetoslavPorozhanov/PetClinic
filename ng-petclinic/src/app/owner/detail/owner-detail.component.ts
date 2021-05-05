import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IOwner } from 'src/app/shared/interfaces';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {

  owner: IOwner = null;

  constructor(
    ownerService: OwnerService,
    activatedRoute: ActivatedRoute
  ) {
    const id = activatedRoute.snapshot.params.id;
    ownerService.loadOwner(id).subscribe(owner => {
      this.owner = owner;
    });
  }

  ngOnInit(): void {
  }

}
