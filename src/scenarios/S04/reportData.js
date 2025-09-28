const s04ReportData = {
    title: "S04 - 无尽信息流性能体检报告",
    overallAnalysis: (
      <>
        <p>
          <strong>问题定性：</strong> 页面在首次加载时，同步地、一次性地渲染了1000个复杂的列表项组件。
        </p>
        <p>
          <strong>根本原因：</strong> 这种“暴力渲染”模式导致了在极短时间内产生海量的DOM节点创建和JS计算任务，彻底阻塞了浏览器的主线程。
        </p>
        <p>
          <strong>用户影响：</strong> 直接后果是页面加载过程中出现数秒的白屏或“假死”状态，可交互时间（TTI）极长，后续的滚动操作也会持续引发掉帧和卡顿，严重损害了To C场景下用户留存最依赖的流畅体验。
        </p>
      </>
    ),
    testResults: [
      {
        tool: 'Lighthouse',
        images: [
          { src: '/report-images/s04/S04+.png', caption: '性能总分仅为35，属于严重性能问题范畴。' },
          { src: '/report-images/s04/S04++.png', caption: 'TBT高达2540ms，意味着主线程被阻塞了2.5秒之久。' },
          { src: '/report-images/s04/S04++++.png', caption: 'Lighthouse明确指出问题在于JS执行时间和主线程工作量过大。' },
          { src: '/report-images/s04/S04+++++.png', caption: 'Treemap显示JS包大小' }
        ],
      },
      {
        tool: 'Performance',
        images: [
          { src: '/report-images/s04-+.png', caption: '火焰图记录到一个持续超过6秒的“长任务”，阻塞了主线程。' },
        ],
      },
      {
        tool: 'React Profiler',
        images: [
          { src: '/report-images/s04--+.png', caption: 'Profiler主体结构' },
          { src: '/report-images/s04--++.png', caption: 'Profiler明确指认，SlowListScenario组件单次渲染耗时1.2秒，并创建了海量ListItem。' },
        ],
      },
    ],
    // 优化措施部分暂时留空，后续填充
    solutionSummary: null 
  };

export default s04ReportData;
