import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonState {
  list: PokemonListItem[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  list: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemonFetch: (state) => {
      state.loading = true;
    },
    getPokemonSuccess: (
      state,
      action: PayloadAction<PokemonListItem[]>
    ) => {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    },
    getPokemonFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPokemonState: () => initialState,
  },
});

export const {
  getPokemonFetch,
  getPokemonSuccess,
  getPokemonFailure,
  resetPokemonState,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
