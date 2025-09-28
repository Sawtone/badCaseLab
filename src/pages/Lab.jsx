import React, { Suspense, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

// 动态加载组件
const loadScenario = (scenarioId) => {
  if (!scenarioId) return null;
  // React.lazy 接受一个返回 Promise 的函数
  // 这个 Promise 应该 resolve 一个包含 default export 的模块
  return React.lazy(() => import(`../scenarios/${scenarioId}/index.jsx`));
};

const Lab = () => {
  const [searchParams] = useSearchParams();
  const scenarioId = searchParams.get('scenario');

  // 使用 useMemo 防止每次渲染都重新调用 loadScenario
  const ScenarioComponent = useMemo(() => loadScenario(scenarioId), [scenarioId]);

  if (!ScenarioComponent) {
    return (
      <div>
        <h2>请提供一个场景ID</h2>
        <p>例如: <a href="/lab?scenario=S04_SlowList">/lab?scenario=S04_SlowList</a></p>
        <a href="/">返回主菜单</a>
      </div>
    );
  }

  return (
    <div>
      <a href="/" style={{ marginBottom: '20px', display: 'inline-block' }}>&larr; 返回主菜单</a>
      <hr />
      {/* Suspense 用于处理懒加载组件时的等待状态 */}
      <Suspense fallback={<div>正在加载场景: {scenarioId}...</div>}>
        <ScenarioComponent />
      </Suspense>
    </div>
  );
};

export default Lab;