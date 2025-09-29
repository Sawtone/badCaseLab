import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ModeSwitcher.css';

const ModeSwitcher = ({ scenarioId, currentView, hasSolvedVersion }) => {
  const navigate = useNavigate();
  const location = useLocation();

  if (!hasSolvedVersion) {
    return null;
  }

  const handleToggle = (e) => {
    const nextView = e.target.checked ? 'solved' : 'problem';
    navigate(`${location.pathname}?scenario=${scenarioId}&view=${nextView}`);
  };

  return (
    <label className="switcher">
      <input 
        type="checkbox"
        checked={currentView === 'solved'}
        onChange={handleToggle}
      />
      <span className="slider-track">
        <span className="label-problem">BadCase</span>
        <span className="label-solved">Solved</span>
      </span>
    </label>
  );
};

export default ModeSwitcher;