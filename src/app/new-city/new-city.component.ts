import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';
@Component({
  selector: 'app-new-city',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-city.component.html',
  styleUrl: './new-city.component.scss'
})
export class NewCityComponent {
  constructor(private localStorageService: LocalStorageService) {} 
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
}
