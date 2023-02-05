import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUser(state, { payload }) {
      state.users.push(payload);
    },
    removeUser(state, { payload }) {},
    toggleStatus(state, { payload }) {},
  },
});

export const { addUser, removeUser, toggleStatus } = usersSlice.actions;
export const usersReduser = usersSlice.reducer;
