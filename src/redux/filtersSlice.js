import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    name: '',
  },
};

export const selectNameFilter = (state) => {
  return state.filters.filters;
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.filters((el) => el.id !== payload.id);
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
