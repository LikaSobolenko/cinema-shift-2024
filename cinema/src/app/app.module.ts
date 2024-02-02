import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AfficheComponent } from './affiche/affiche.component';
import { MovieComponent } from './movie/movie.component'
import { HeaderComponent } from './header/header.component'

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RoutingModule } from './app-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AfficheComponent, 
    MovieComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    RoutingModule,
    MatChipsModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
