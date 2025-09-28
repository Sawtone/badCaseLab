import React from 'react';
import './ReportButton.css';

const ReportButton = ({ onClick }) => {
  return (
    <button className="report-fab" onClick={onClick}>
      📊
    </button>
  );
};

export default ReportButton;