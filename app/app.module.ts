import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, Form} from '@angular/forms'
import { Routes, RouterModule, RouterLink } from '@angular/router';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { StaffsComponent } from './staffs/staffs.component';
import {APP_ROUTE} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    StaffsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
