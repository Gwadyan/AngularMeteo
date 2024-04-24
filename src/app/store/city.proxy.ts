import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { City } from "../models/city";

@Injectable({providedIn: 'root'})
export class CityProxyService{
    CurrentCities: City[]= [
        { id: '1', name: 'New York', country: 'USA' },
        { id: '2', name: 'London', country: 'UK' },
        { id: '3', name: 'Paris', country: 'France' },
        { id: '4', name: 'Berlin', country: 'Germany' },
        { id: '5', name: 'Madrid', country: 'Spain' },
        { id: '6', name: 'Rome', country: 'Italy' },
        { id: '7', name: 'Tokyo', country: 'Japan' },
        { id: '8', name: 'Beijing', country: 'China' },
        { id: '9', name: 'Moscow', country: 'Russia' },
        { id: '10', name: 'Istanbul', country: 'Turkey' },
        { id: '11', name: 'Cairo', country: 'Egypt' },
        { id: '12', name: 'Cape Town', country: 'South Africa' },
        { id: '13', name: 'Sydney', country: 'Australia' },
        { id: '14', name: 'Rio de Janeiro', country: 'Brazil' },
        { id: '15', name: 'Mexico City', country: 'Mexico' },
        { id: '16', name: 'Toronto', country: 'Canada' },
        { id: '17', name: 'Buenos Aires', country: 'Argentina' },
        { id: '18', name: 'Lima', country: 'Peru' },
        { id: '19', name: 'Santiago', country: 'Chile' },
        { id: '20', name: 'Caracas', country: 'Venezuela' },
        { id: '21', name: 'Bogota', country: 'Colombia' },
        { id: '22', name: 'Lagos', country: 'Nigeria' },
        { id: '23', name: 'Nairobi', country: 'Kenya' },
        { id: '24', name: 'Mumbai', country: 'India' },
        { id: '25', name: 'Bangkok', country: 'Thailand' },
        { id: '26', name: 'Jakarta', country: 'Indonesia' },
    ]

    load(): Observable<City[]>{
        return of(this.CurrentCities)
    }
    insert(city:City):Observable<City>{
        this.CurrentCities = [... this.CurrentCities, city]
      return of(city)  
    }
}