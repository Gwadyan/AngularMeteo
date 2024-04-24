import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
import { Store, StoreModule } from '@ngrx/store';
import { insertCity } from '../store/city.actions';
@Component({
  selector: 'app-new-city',
  standalone: true,
  imports: [ReactiveFormsModule,StoreModule],
  templateUrl: './new-city.component.html',
  styleUrl: './new-city.component.scss'
})
export class NewCityComponent {
  constructor(private store: Store, private localStorageService: LocalStorageService) {} 
onSubmit() {
  console.log("test");
  console.warn(this.formulaire.value);
}
  formulaire = new FormGroup({
    ville : new FormControl(''),
    imageTemps : new FormControl(''),
    temperatureActuelle : new FormControl(''),
    typeTemps : new FormControl(''),
    temperatureMax : new FormControl(''),
    temperatureMin : new FormControl('')
  });
  saveToLocalStorage() {
    this.localStorageService.setItem('myKey', 'Hello, Local Storage!');
  }

  retrieveFromLocalStorage() {
    const value = this.localStorageService.getItem('myKey');
    console.log(value);
  }
  addCity(){
    this.store.dispatch(insertCity({ city:{id : '31860', name : 'Pins-Justaret', country : 'France'}}))
  }
}
