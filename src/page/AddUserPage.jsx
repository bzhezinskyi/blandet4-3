import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { getStatus } from 'services/statusApi.service';

const AddUserPage = () => {
  const [name, setName] = useState('');
  const [agg, setAgg] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'agg':
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
      id: nanoid,
    };
    setAgg('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <label>
        <p>Agg</p>
        <input name="agg" type="number" value={agg} onChange={handleChange} />
      </label>
      <button>Add</button>
    </form>
  );
};
export default AddUserPage;
