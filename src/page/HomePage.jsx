import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'redux/users/users.selector';

import { Button, Modal, Table } from 'react-bootstrap';

import Avatar from 'react-avatar';
import { removeUser, toggleStatus } from 'redux/users/users.slise';

const HomePage = () => {
  const usersList = useSelector(getUsers);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});

  const handleClose = () => {
    setShow(false);
    setUser({});
  };
  const handleShow = user => {
    setShow(true);
    setUser(user);
  };
  const handleRemoveUser = id => {
    dispatch(removeUser(id));
    handleClose();
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user, idx) => (
            <tr key={user.id}>
              <td>{idx + 1}</td>
              <td>
                <Avatar name={user.name} size="40" round={true} />
              </td>
              <td>{user.name}</td>
              <td>{user.agg}</td>
              <td>
                <Button
                  type="button"
                  variant={user.status === 'online' ? 'success' : 'danger'}
                  onClick={() => dispatch(toggleStatus(user.id))}
                >
                  {user.status}
                </Button>
              </td>
              <td>
                <Button variant="primary" onClick={() => handleShow(user)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          Are you sure you want to delete user {user.name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleRemoveUser(user.id)}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomePage;
