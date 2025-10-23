import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Teams API:', API_URL);
        console.log('Fetched teams:', results);
        setTeams(results);
      });
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map(t => (
          <li key={t._id || t.id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
