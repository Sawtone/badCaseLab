import React, { useEffect, useRef } from 'react';
import ModeSwitcher from './ModeSwitcher';
import ReportButton from './ReportButton';
import './LabControl.css';

const LabControl = ({ scenarioId, currentView, hasSolvedVersion, onToggleReport, isLoading }) => {
  const containerRef = useRef(null);

  // 跟踪鼠标
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    const parentContainer = container.parentElement;
    parentContainer.addEventListener('mousemove', handleMouseMove);

    return () => {
      parentContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const containerClassName = `aurora-container ${isLoading ? 'is-loading' : ''}`;

  return (
    <div className={containerClassName}>
      <div className="aurora-container-inner" ref={containerRef}>
        
        <div className="aurora-background">
          <span className="aurora-blob"></span>
          <span className="aurora-blob"></span>
          <span className="aurora-blob"></span>
        </div>

        <ModeSwitcher
          scenarioId={scenarioId}
          currentView={currentView}
          hasSolvedVersion={hasSolvedVersion}
        />
        
        {hasSolvedVersion && <div className="separator"></div>}
        
        <ReportButton onClick={onToggleReport} />

      </div>
    </div>
  );
};

export default LabControl;
