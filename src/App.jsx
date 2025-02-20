import React from 'react';
    import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
    import Home from './components/Home';
    import LogActivity from './components/LogActivity';
    import CalendarView from './components/CalendarView';
    import Insights from './components/Insights';
    import Resources from './components/Resources';
    import Login from './components/Login';
    import Register from './components/Register';
    import './App.css';
    import { Home as HomeIcon, Book as BookIcon, CalendarToday as CalendarTodayIcon, Assessment as AssessmentIcon, Info as InfoIcon } from '@mui/icons-material';


    function App() {
      return (
        <Router>
          <div className="app-container">
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/log" element={<LogActivity />} />
                <Route path="/calendar" element={<CalendarView />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>

            <nav className="bottom-nav">
              <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <HomeIcon />
                Home
              </NavLink>
              <NavLink to="/log" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <BookIcon />
                Log
              </NavLink>
              <NavLink to="/calendar" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <CalendarTodayIcon />
                Calendar
              </NavLink>
              <NavLink to="/insights" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <AssessmentIcon />
                Insights
              </NavLink>
              <NavLink to="/resources" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
                <InfoIcon />
                Resources
              </NavLink>
            </nav>
          </div>
        </Router>
      );
    }

    export default App;
