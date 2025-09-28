import React from 'react';

const Home = () => {
  const scenarioListStyle = {
    lineHeight: '2.2',
    fontFamily: 'monospace'
  };

  return (
    <div>
      <h1>Bad-Case-Lab 性能场景实验室</h1>
      <p>请选择一个场景开始分析:</p>
      <ul style={scenarioListStyle}>
        <li><strong>加载与打包</strong></li>
        <ul>
          <li><a href="/lab?scenario=S01_SlowFCP">S01 - To C: 缓慢的首屏</a></li>
          <li><a href="/lab?scenario=S02_BundleBloat">S02 - 全局: 臃肿的主包 (构建时分析)</a></li>
          <li><a href="/lab?scenario=S03_NoCodeSplitting">S03 - 架构: 无效的代码分割 (构建时分析)</a></li>
        </ul>
        <li><strong>运行时 - 渲染</strong></li>
        <ul>
          <li><a href="/lab?scenario=S04">S04 - To C: 无尽信息流 (列表暴力渲染)</a></li>
          <li><a href="/lab?scenario=S05_DataGrid">S05 - To B: 巨型数据网格</a></li>
          <li><a href="/lab?scenario=S06_InvalidRender">S06 - 全局: 连锁的无效渲染</a></li>
        </ul>
        <li><strong>运行时 - 逻辑与状态</strong></li>
        <ul>
            <li><a href="/lab?scenario=S07_ExpensiveCalc">S07 - To B: 阻塞UI的计算</a></li>
            <li><a href="/lab?scenario=S08_HighFreqEvents">S08 - 全局: 高频触发的事件</a></li>
            <li><a href="/lab?scenario=S09_BadState">S09 - To B: 低效的状态结构</a></li>
        </ul>
      </ul>
    </div>
  );
};

export default Home;