import { Nav } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Nav variant="tabs" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to="adduser">
              AddUser
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
