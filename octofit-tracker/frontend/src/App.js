import logo from './logo.svg';
import './App.css';
import { NavLink, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import octofitLogo from './octofitapp-small.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4" style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/">
          <img src={octofitLogo} alt="OctoFit Logo" className="octofit-logo" style={{ marginRight: '10px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link text-white" to="/activities">Activities</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/leaderboard">Leaderboard</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/teams">Teams</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/users">Users</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link text-white" to="/workouts">Workouts</NavLink></li>
          </ul>
        </div>
      </nav>
      <div className="mb-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={<div className="card p-4"><h2 className="display-5">Welcome to OctoFit Tracker!</h2><p>Select a section above.</p></div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
