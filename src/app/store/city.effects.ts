import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { insertCity, insertCityFail, insertCitySuccess, loadCities, loadCitiesFail, loadCitiesSuccess } from './city.actions'
import { CityProxyService } from './city.proxy'
import { City } from '../models/city'

@Injectable()
export class CityEffects {
    loadCities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCities),
            switchMap(() => this.cityService.load()),
            map((cities) => loadCitiesSuccess({ cities })),
            catchError(() => of(loadCitiesFail()))
        )
    )

    insertCity$ = createEffect(() =>
        this.actions$.pipe(
            ofType(insertCity),
            switchMap((action) => this.cityService.insert(action.city)),
            map((city) => insertCitySuccess({city})),
            catchError(() => of(insertCityFail()))
        )
    )

    constructor(private actions$: Actions, private cityService: CityProxyService) {}
}