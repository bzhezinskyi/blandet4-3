import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/users.slise';
import { getStatus } from 'services/statusApi.service';

const AddUserPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(() => localStorage.getItem('name') ?? '');
  const [agg, setAgg] = useState(() => localStorage.getItem('age') ?? '');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        localStorage.setItem('name', value);
        setName(value);
        break;
      case 'agg':
        localStorage.setItem('age', value);
        setAgg(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const status = (await getStatus()) === 'yes' ? 'online' : 'ofline';
    const user = {
      agg,
      name,
      status,
      id: nanoid(),
    };
    dispatch(addUser(user));
    localStorage.removeItem('name');
    localStorage.removeItem('age');
    setAgg('');
    setName('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Agg</Form.Label>
          <Form.Control
            name="agg"
            type="number"
            value={agg}
            onChange={handleChange}
            placeholder="Enter agg"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </Container>
  );
};
export default AddUserPage;
