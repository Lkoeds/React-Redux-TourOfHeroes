import { createSlice } from '@reduxjs/toolkit'

export const heroeSlice = createSlice({
  name: 'heroes',
  initialState: {
    heroes: [
      {
        id: 11,
        name: "Mr. Nice",
        power: "Fly",
        favorite: false
      },
      {
        id: 12,
        name: "Bombasto",
        power: "Bombs",
        favorite: true
      }
    ]
  },
  reducers: {
    add_heroe: (state, action) => {
      if (action.payload.name) {
        state.heroes.push({
          id: state.heroes[state.heroes.length - 1].id + 1,
          name: action.payload.name
        });
      }
    },
    edit_heroe: (state, action) => {
      state.heroes.some((h, index) => {
        if (h.id === action.payload.id) {
          state.heroes[index].name = action.payload.name;
          state.heroes[index].favorite = action.payload.favorite;
          state.heroes[index].power = action.payload.power;
          return true;
        }
        return false;
      });
    },
    delete_heroe: (state, action) => {
      state.heroes.some((h, index) => {
        if (h.id === action.payload) {
          state.heroes.splice(index, 1);
          return true;
        }
        return false;
      });
    },
    
  }
});

export const { add_heroe, edit_heroe, delete_heroe } = heroeSlice.actions

export const getHeroes = (state) => state.heroes.heroes;

export default heroeSlice.reducer