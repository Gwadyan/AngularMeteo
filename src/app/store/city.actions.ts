import { createAction, props } from '@ngrx/store'
import { City } from '../models/city'

export const loadCities = createAction('[City] Load')
export const loadCitiesSuccess = createAction('[City] Load Success', props<{ cities: City[] }>())
export const loadCitiesFail = createAction('[City] Load Fail')

export const insertCity = createAction('[City] Insert', props<{ city: City }>())
export const insertCitySuccess = createAction('[City] Insert Success', props<{ city: City }>())
export const insertCityFail = createAction('[City] Insert Fail')