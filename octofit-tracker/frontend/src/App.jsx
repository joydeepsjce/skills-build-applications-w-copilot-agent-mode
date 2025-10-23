import React, { useEffect, useState } from 'react';

const API_BASE = 'http://localhost:8000/api';

function fetchApi(endpoint) {
  return fetch(`${API_BASE}/${endpoint}/`).then(res => res.json());
}

function App() {
  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchApi('teams').then(setTeams);
    fetchApi('users').then(setUsers);
    fetchApi('activities').then(setActivities);
    fetchApi('workouts').then(setWorkouts);
    fetchApi('leaderboard').then(setLeaderboard);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>OctoFit Tracker</h1>
      <section>
        <h2>Teams</h2>
        <ul>{teams.map(t => <li key={t._id}>{t.name}</li>)}</ul>
      </section>
      <section>
        <h2>Users</h2>
        <ul>{users.map(u => <li key={u._id}>{u.name} ({u.email}) - Team: {u.team?.name}</li>)}</ul>
      </section>
      <section>
        <h2>Activities</h2>
        <ul>{activities.map(a => <li key={a._id}>{a.type} ({a.duration} min) by {a.user?.name}</li>)}</ul>
      </section>
      <section>
        <h2>Workouts</h2>
        <ul>{workouts.map(w => <li key={w._id}>{w.name}: {w.description} (Suggested for: {w.suggested_for})</li>)}</ul>
      </section>
      <section>
        <h2>Leaderboard</h2>
        <ul>{leaderboard.map(l => <li key={l._id}>{l.team?.name}: {l.points} pts</li>)}</ul>
      </section>
    </div>
  );
}

export default App;
