import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ModeSwitcher.css';

const ModeSwitcher = ({ scenarioId, currentView, hasSolvedVersion }) => {
  const location = useLocation();

  if (!hasSolvedVersion) return null;

  const problemLink = `${location.pathname}?scenario=${scenarioId}&view=problem`;
  const solvedLink = `${location.pathname}?scenario=${scenarioId}&view=solved`;

  return (
    <div className="mode-switcher">
      <Link to={problemLink} className={currentView === 'problem' ? 'active' : ''}>
        Problem
      </Link>
      <Link to={solvedLink} className={currentView === 'solved' ? 'active' : ''}>
        Solved
      </Link>
    </div>
  );
};

export default ModeSwitcher;