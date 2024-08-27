import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

export const selectContacts = (state) => {
  return state.items.contacts;
};

export const contactsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    deleteContacts(state, { payload }) {
      const index = state.contacts.findIndex((el) => el.id !== payload.id);
      state.items.splice(index, 1);
    },
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;

export default contactsSlice.reducer;
