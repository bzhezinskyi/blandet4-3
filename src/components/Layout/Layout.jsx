import { Outlet } from 'react-router-dom';
import { StyledLink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="adduser">AddUser</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
