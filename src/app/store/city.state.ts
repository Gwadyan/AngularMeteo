import { City } from '../models/city'

export interface CityState {
    isLoaded: boolean
    isLoading: boolean
    cities: City[]
    selectedCityId: string
}