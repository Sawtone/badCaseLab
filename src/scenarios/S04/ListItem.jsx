import React from 'react';
import './ListItem.css';

// 独立的列表展示组件
const ListItem = React.forwardRef(({ avatar, name, contentText, contentImage }, ref) => {
  return (
    <li className="list-item-container" ref={ref}>
      <img className="avatar" src={avatar} alt="User avatar" />
      <div className="content">
        <strong className="name">{name}</strong>
        <p className="text">{contentText}</p>
        <img className="content-image" src={contentImage} alt="Content" />
        <button className="action-button" onClick={() => alert(`Liked post by ${name}`)}>
          Like
        </button>
      </div>
    </li>
  );
});

export default ListItem;
