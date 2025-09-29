import React from 'react';
import './ReportButton.css';

const ReportButton = ({ onClick }) => {
  return (
    <button className="report-button" aria-label="Show Report" onClick={onClick}>
      📊
    </button>
  );
};

export default ReportButton;