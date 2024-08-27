import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: '',
  name2: '',
  name3: '',
};

export const userSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName1(state, { payload }) {},
    setName2(state, { payload }) {},
    setName3(state, { payload }) {},
  },
});

export const { setName1, setName2, setName3 } = userSlice.actions;

export default userSlice.reducer;
