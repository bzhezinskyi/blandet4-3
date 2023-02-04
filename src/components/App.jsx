import AddUserPage from 'page/AddUserPage';
import HomePage from 'page/HomePage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="adduser" element={<AddUserPage />} />
    </Route>
  </Routes>
);
