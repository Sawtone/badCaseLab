import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';

import ReportDrawer from '../components/ReportDrawer/ReportDrawer';
import AuditReport from '../components/AuditReport/AuditReport';
import LabControl from '../components/LabControl/LabControl';


const Lab = () => {
  const [searchParams] = useSearchParams();
  const scenarioId = searchParams.get('scenario');
  const view = searchParams.get('view') || 'problem';

  // 使用 state 来存储动态加载的组件和数据
  const [resources, setResources] = useState({
    Problem: null,
    Solved: null,
    reportData: null,
  });
  const [isReportOpen, setIsReportOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!scenarioId) return;  

    setIsLoading(true);

    // 重置状态以显示加载中
    setResources({ Problem: null, Solved: null, reportData: null });

    const loadResources = async () => {
      try {
        // React.lazy 接受一个返回 Promise 的函数
        // 这个 Promise 应该 resolve 一个包含 default export 的模块
        const ProblemComponent = React.lazy(() => import(`../scenarios/${scenarioId}/Problem.jsx`));
        
        const SolvedComponent = React.lazy(() => 
          import(`../scenarios/${scenarioId}/Solved.jsx`)
          .catch(() => ({ default: null }))
        );
        
        const reportDataModule = await import(`../scenarios/${scenarioId}/reportData.js`);

        setResources({
          Problem: ProblemComponent,
          Solved: SolvedComponent,
          reportData: reportDataModule.default,
        });
      } catch (error) {
        console.error(`Failed to load resources for scenario ${scenarioId}:`, error);
        setIsLoading(false)
      }
    };

    loadResources();
  }, [scenarioId, view]);

  if (!scenarioId) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>请在主页选择一个场景</h2>
        <a href="/">返回主菜单</a>
      </div>
    );
  }

  return (
    <div style={{ 
      background: 'radial-gradient(circle at center, #fdfdfd 0%, #f7f7f7 100%)',
      minHeight: '100vh'
    }}>
      {/* 唯一的 Suspense 用于处理所有动态加载的场景组件 */}
      <Suspense fallback={<div style={{ padding: '20px', fontSize: '24px' }}>加载场景中...</div>}>
        {view === 'problem' && resources.Problem && 
          <resources.Problem onRenderComplete={() => setIsLoading(false)}/>
        }
        {view === 'solved' && resources.Solved && <resources.Solved />}
      </Suspense>

      {/* 仅在资源加载后显示统一的UI控件 */}
      {(isLoading || resources.reportData) && (
        <LabControl
            scenarioId={scenarioId}
            currentView={view}
            hasSolvedVersion={!!resources.Solved}
            onToggleReport={() => setIsReportOpen(true)}
            isLoading={isLoading}
        />
      )}

      {/* 报告抽屉 */}
      {resources.reportData && (
        <ReportDrawer isOpen={isReportOpen} onClose={() => setIsReportOpen(false)}>
          <AuditReport {...resources.reportData} />
        </ReportDrawer>
      )}
    </div>
  );
};

export default Lab;