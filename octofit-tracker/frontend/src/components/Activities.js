import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Activities API:', API_URL);
        console.log('Fetched activities:', results);
        setActivities(results);
      });
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map(a => (
          <li key={a._id || a.id}>{a.type} ({a.duration} min) by {a.user?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
