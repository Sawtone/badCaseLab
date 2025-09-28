import React from 'react';

const CRightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <div className="module">
        <h4>Who to follow</h4>
        <div className="follow-suggestion">User One</div>
        <div className="follow-suggestion">User Two</div>
      </div>
      <div className="module">
        <h4>Trends for you</h4>
        <div className="trend-item">#ReactPerformance</div>
        <div className="trend-item">#Frontend</div>
      </div>
    </aside>
  );
};
export default CRightSidebar;