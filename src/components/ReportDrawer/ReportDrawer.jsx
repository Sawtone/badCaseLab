import React from 'react';
import './ReportDrawer.css';

// 纯UI组件，通过props控制开关和内容
const ReportDrawer = ({ isOpen, onClose, children }) => {
  return (
    <>
      {/* 当isOpen为true时，添加 'open' 类名来触发CSS过渡 */}
      <div className={`report-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <h3>性能体检报告</h3>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <div className="drawer-content">
          {children}
        </div>
      </div>
      {/* 当抽屉打开时，显示一个背景遮罩，点击可以关闭抽屉 */}
      {isOpen && <div className="drawer-backdrop" onClick={onClose}></div>}
    </>
  );
};

export default ReportDrawer;