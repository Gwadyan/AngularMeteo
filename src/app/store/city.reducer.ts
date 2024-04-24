
import { Action, createReducer, on } from '@ngrx/store'
import { insertCity, insertCitySuccess, loadCities, loadCitiesSuccess } from './city.actions'
import { CityState } from './city.state'

const initialState: CityState = {
    isLoaded: false,
    isLoading: false,
    cities: [],
    selectedCityId: '',
}

const reducer = createReducer(
    initialState,
    on(loadCities, (state) => ({
         ...state, isLoading: true 
        })),
    on(loadCitiesSuccess, (state: CityState, { cities }) => ({
        ...state,
        cities,
        isLoading: false,
        isLoaded: true,
    })),
    on(insertCitySuccess, (state, { city }) => ({
         ...state, cities: [...state.cities, city] 
        }))
)

export function cityReducer(state: CityState | undefined, action: Action) {
    return reducer(state, action)
}