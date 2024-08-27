import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: [],
  name2: '',
  name3: '',
};

export const contactsSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName1(state, { payload }) {},
    addContact(state, { payload }) {
      state.payload.push();
    },
    setName3(state, { payload }) {},
  },
});

export const { setName1, setName2, setName3 } = contactsSlice.actions;

export default contactsSlice.reducer;
