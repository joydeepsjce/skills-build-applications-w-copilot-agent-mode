import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Workouts API:', API_URL);
        console.log('Fetched workouts:', results);
        setWorkouts(results);
      });
  }, []);

  return (
    <div>
      <h2>Workouts</h2>
      <ul>
        {workouts.map(w => (
          <li key={w._id || w.id}>{w.name}: {w.description} (Suggested for: {w.suggested_for})</li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
