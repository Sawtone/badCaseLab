import React from 'react';

const CHeader = () => {
  return (
    <header className="app-header">
      <div className="logo">BadCaseLab</div>
      <nav className="main-nav">
        <a href="#home">Home</a>
        <a href="#notifications">Notifications</a>
        <a href="#messages">Messages</a>
      </nav>
      <div className="user-profile">
        <span>My Profile</span>
      </div>
    </header>
  );
};
export default CHeader;