import { Component, OnInit } from '@angular/core';
import { StaffsService } from '../staffs.service';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.css'],
  providers: [StaffsService]
})
export class StaffsComponent implements OnInit {

  private _staffList = [];

  constructor(private _staffSerivce: StaffsService) {
    this._staffList = _staffSerivce.getStaffs();
  }

  ngOnInit() {
  }

}
