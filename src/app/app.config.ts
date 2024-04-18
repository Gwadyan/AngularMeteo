import { ApplicationConfig, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'

import { provideEffects } from '@ngrx/effects'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { routes } from './app.routes'
import { CityEffects } from './store/city.effects'
import { cityReducer } from './store/city.reducer'

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideStore({
            cities: cityReducer,
        }),
        provideEffects([CityEffects]),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    ]
}

