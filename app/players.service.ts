import {Injectable} from '@angular/core';

@Injectable()
export class PlayersService{ 
    private _playerList = [];
    private _newPlayer = { firstname: '', lastname: ''};

    getPlayers(){
        this._playerList = JSON.parse(localStorage.getItem('players'));
        return this._playerList;
    }

    addPlayer(_newPlayer){
        this._newPlayer = _newPlayer;
        this._playerList = JSON.parse(localStorage.getItem('players'));
        this._playerList.push(this._newPlayer);

        localStorage.setItem('players', JSON.stringify(this._playerList));
    }
}