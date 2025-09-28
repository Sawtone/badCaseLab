import React from 'react';
import ModeSwitcher from './ModeSwitcher';
import ReportButton from './ReportButton';
import './LabControl.css';

const LabControl = ({ scenarioId, currentView, hasSolvedVersion, onToggleReport }) => {
  return (
    <div className="lab-control-container">
      {/* 模式切换器 */}
      <ModeSwitcher
        scenarioId={scenarioId}
        currentView={currentView}
        hasSolvedVersion={hasSolvedVersion}
      />
      {/* 报告按钮 */}
      <ReportButton onClick={onToggleReport} />
    </div>
  );
};

export default LabControl;