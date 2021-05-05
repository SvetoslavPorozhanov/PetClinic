import { Component, Input, OnInit } from '@angular/core';
import { IOwner } from '../../shared/interfaces';
import { OwnerService } from '../owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {

  ownerList: IOwner[];

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
    this.ownerService.loadOwnerList().subscribe(ownerList => {
      this.ownerList = ownerList;
    });
  }

}
