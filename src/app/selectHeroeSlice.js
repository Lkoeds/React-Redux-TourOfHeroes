import { createSlice } from '@reduxjs/toolkit'

export const selectHeroeSlice = createSlice({
  name: 'selectedHeroe',
  initialState: {
    heroeSelected: []},
  reducers: {
    select_heroe: (state, action) => {
      state.heroeSelected = action.payload
    }
  }
});

export const {select_heroe} = selectHeroeSlice.actions

export const getHero = (state) => state.selectedHeroe;

export default selectHeroeSlice.reducer