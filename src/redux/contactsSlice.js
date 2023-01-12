import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    addFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, addFilter } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
