import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, of, switchMap } from 'rxjs'
import { loadCities, loadCitiesFail, loadCitiesSuccess } from './city.actions'
import { CityProxyService } from './city.proxy'

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

    constructor(private actions$: Actions, private cityService: CityProxyService) {}
}