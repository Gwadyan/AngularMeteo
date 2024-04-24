import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AddCardComponent } from './add-card/add-card.component';
import { HomeComponent } from './home/home.component';
import { NewCityComponent } from './new-city/new-city.component';

export const routes: Routes = [
    { path: 'app-home', title: 'Accueil', component: HomeComponent },
    { path: 'app-details', title: 'Détails', component: DetailsComponent },
    { path: 'app-add-card', title: 'Ajout1', component: AddCardComponent },
    { path: 'app-new-city', title: 'Ajout2', component: NewCityComponent },
    { path: '',   redirectTo: '/app-home', pathMatch: 'full' },
];
