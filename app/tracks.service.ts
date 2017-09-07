import { Injectable } from '@angular/core';

@Injectable()
export class TrackService {
    private _tracks = [];
    getTracks() {
        return this._tracks = [
            {
                'trackName': 'Track1',
                'spotifyKey': 'Spotfiy Key 1'
            },
            {
                'trackName': 'Track2',
                'spotifyKey': 'Spotfiy Key 2'
            },
            {
                'trackName': 'Track3',
                'spotifyKey': 'Spotfiy Key 3'
            }
        ]
    }
}

