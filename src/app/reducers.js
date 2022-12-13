import { combineReducers } from 'redux'
import selectHeroeSlice from './selectHeroeSlice'
import heroSlicer from '../features/heroes/heroSlicer'

export const rootReducer = combineReducers({
    selectedHeroe: selectHeroeSlice,
    heroes: heroSlicer
  })
