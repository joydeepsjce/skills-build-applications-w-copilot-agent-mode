import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Leaderboard API:', API_URL);
        console.log('Fetched leaderboard:', results);
        setLeaderboard(results);
      });
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map(l => (
          <li key={l._id || l.id}>{l.team?.name}: {l.points} pts</li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
