import { configureStore } from '@reduxjs/toolkit';
import { usersReduser } from './users/users.slise';

export const store = configureStore({
  reducer: {
    users: usersReduser,
  },
});
