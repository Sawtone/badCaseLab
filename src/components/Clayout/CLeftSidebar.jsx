import React from 'react';

const CLeftSidebar = () => {
  return (
    <aside className="left-sidebar">
      <div className="profile-card">
        <div className="profile-avatar"></div>
        <strong>Sawtone</strong>
        <span>@Frontend</span>
      </div>
      <nav className="sidebar-nav">
        <a href="#feed">My Feed</a>
        <a href="#explore">Explore</a>
        <a href="#bookmarks">Bookmarks</a>
        <a href="#settings">Settings</a>
      </nav>
    </aside>
  );
};
export default CLeftSidebar;