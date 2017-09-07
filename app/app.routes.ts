import { PlayersComponent } from './players/players.component';
import { StaffsComponent } from './staffs/staffs.component';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTE = [
    { path: 'players', component: PlayersComponent },
    { path: 'staffs', component: StaffsComponent }
]


