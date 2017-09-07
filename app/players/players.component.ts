import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
  providers: [PlayersService]
})
export class PlayersComponent implements OnInit {

  private _playerList = [];

  private _newPlayer = {
    firstname : '',
    lastname: ''
  }

  constructor(private _playerService : PlayersService) { 
      //console.log(this._playerList);
  }

  ngOnInit() {
    this._playerList = this._playerService.getPlayers();
  }

  addPlayer(){
    this._playerList.push(this._newPlayer);
    this._playerService.addPlayer(this._newPlayer);
    this._newPlayer = {
      firstname: '',
      lastname: ''
    }
  }

  removePlayer(){
    
  }
}
