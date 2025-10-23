import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Users API:', API_URL);
        console.log('Fetched users:', results);
        setUsers(results);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u._id || u.id}>{u.name} ({u.email}) - Team: {u.team?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
