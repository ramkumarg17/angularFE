import { Component, OnInit } from '@angular/core';
import { TrackService } from '../tracks.service';

@Component({
  selector: 'app-slidernav',
  templateUrl: './slidernav.component.html',
  styleUrls: ['./slidernav.component.css'],
  providers: [TrackService]
})
export class SlidernavComponent implements OnInit {

  private _trackList = [];

  constructor(private _trackService: TrackService) {
      this._trackList = this._trackService.getTracks();
  }

  ngOnInit() {
  }

}
