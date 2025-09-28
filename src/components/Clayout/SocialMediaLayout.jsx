import React from 'react';
import CHeader from './CHeader';
import CLeftSidebar from './CLeftSidebar';
import CRightSidebar from './CRightSidebar';
import './CLayout.css';

const SocialMediaLayout = ({ children }) => {
  return (
    <div className="app-container">
      <CHeader />
      <div className="main-content-area">
        <CLeftSidebar />
        <main className="content-feed">
          {children}
        </main>
        <CRightSidebar />
      </div>
    </div>
  );
};
export default SocialMediaLayout;