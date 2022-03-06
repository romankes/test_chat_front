import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
// Local
import {types} from './types';
import type {UiState} from './types';
import type {Ui} from './namespace';

const initialState: UiState = {
  loaders: [],
  errors: [],
  link: null,
};

const slice = createSlice({
  name: 'Ui',
  initialState,
  reducers: {
    toggleLoader: (state: UiState, action: PayloadAction<Ui.Loader>) => {
      const index = state.loaders.findIndex(
        (l) => l.name === action.payload.name,
      );
      if (index !== -1) {
        state.loaders[index].loading = action.payload.loading;
      } else {
        state.loaders = [...state.loaders, action.payload];
      }
    },
    setError: (state: UiState, action: PayloadAction<Ui.Error>) => {
      const index = state.errors.findIndex(
        (e) => e.name === action.payload.name,
      );
      if (index !== -1) {
        state.errors[index].message = action.payload.message;
      } else {
        state.errors = [...state.errors, action.payload];
      }
    },
    clearError: (state: UiState, action: PayloadAction<Ui.FormName>) => {
      state.errors = state.errors.filter((e) => e.name !== action.payload);
    },
    openLink: (state: UiState, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    clearLink: (state: UiState) => {
      state.link = null;
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const uiActions = {
  // Change
  ...slice.actions,
  //Async
};
