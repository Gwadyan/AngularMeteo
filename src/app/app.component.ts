import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import {NewCityComponent } from './new-city/new-city.component'
import { Store, StoreModule } from '@ngrx/store';
import { allCities } from './store/city.selectors';
import { loadCities } from './store/city.actions';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink,RouterLinkActive,ReactiveFormsModule,
    HomeComponent,WeatherCardComponent,AddCardComponent,DetailsComponent,NewCityComponent,StoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private store: Store){}
  ngOnInit(): void {
    this.store.select(allCities).subscribe((cities)=>{
      console.log(cities)
    })
    this.store.dispatch(loadCities())
  }
  title = 'Météo';
}
