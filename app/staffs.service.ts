import {Injectable} from '@angular/core';

@Injectable()
export class StaffsService{ 
    private _staffList = [];

    getStaffs(){
        return [
            {
                name: 'Arsene Wenger',
                role : 'Manager'
            },
            {
                name: 'Steve Bould',
                role: 'Assistant Manager'
            },
            {
                name: 'Jens Lehman',
                role: 'Goal Keeping Coach'
            }
        ]
    }
}