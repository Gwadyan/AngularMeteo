import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CityState } from './city.state'

const citiesSelector = createFeatureSelector<CityState>('cities')

export const allCities = createSelector(citiesSelector, (state) => state.cities)
export const isLoading = createSelector(citiesSelector, (state) => state.isLoading)
export const isLoaded = createSelector(citiesSelector, (state) => state.isLoaded)
