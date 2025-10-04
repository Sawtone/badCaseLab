import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ModeSwitcher.css';

const ModeSwitcher = ({ scenarioId, currentView, hasSolvedVersion }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isGlowing, setIsGlowing] = useState(false);
  const navInFlightRef = useRef(false);
  const labelRef = useRef(null);

  const handleToggle = (e) => {
    if (navInFlightRef.current) return;

    const nextView = e.target.checked ? 'solved' : 'problem';

    // 1) 立刻标记辉光并同步刷新，让样式先渲染进屏幕
    setIsGlowing(true);

    // 2) 让浏览器有两帧机会去绘制辉光（避开主线程长任务把首帧吞掉）
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        navInFlightRef.current = true;
        // 3) 执行导航
        navigate(`${location.pathname}?scenario=${scenarioId}&view=${nextView}`);
      });
    });
  };

  // 监听 URL 变化（location.search）来判断导航完成并移除辉光
  useEffect(() => {
    if (!navInFlightRef.current) return;
    // 导航完成：清除辉光
    navInFlightRef.current = false;
    // 给一帧时间让新视图开始渲染后再消退辉光，避免闪断
    requestAnimationFrame(() => setIsGlowing(false));
  }, [location.search]);

  if (!hasSolvedVersion) {
    return null;
  }

  return (
    <label className={"switcher" + (isGlowing ? " is-glowing" : "")} ref={labelRef}>
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