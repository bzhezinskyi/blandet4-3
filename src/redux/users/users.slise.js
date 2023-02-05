import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [] },
  reducers: {
    addUser(state, { payload }) {
      state.users.push(payload);
    },
    removeUser(state, { payload }) {
      const index = state.users.findIndex(user => user.id === payload);
      state.users.splice(index, 1);
    },
    toggleStatus(state, { payload }) {
      const index = state.users.findIndex(user => user.id === payload);
      state.users[index].status =
        state.users[index].status === 'online' ? 'ofline' : 'online';
    },
  },
});

export const { addUser, removeUser, toggleStatus } = usersSlice.actions;
export const usersReduser = usersSlice.reducer;
