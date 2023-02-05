import StaticExample from 'components/Modal';
import { useState } from 'react';
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import { getUsers } from 'redux/users/users.selector';

const HomePage = () => {
  const [onModal, setOnModal] = useState(false);
  const users = useSelector(getUsers);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id}>
              <td>{idx + 1}</td>
              <td>
                <Avatar name={user.name} size="40" round={true} />
              </td>
              <td>{user.name}</td>
              <td>{user.agg}</td>
              <td>{user.status}</td>
              <td>
                <button type="button" onClick={() => setOnModal(true)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {onModal && <StaticExample />}
    </>
  );
};

export default HomePage;
