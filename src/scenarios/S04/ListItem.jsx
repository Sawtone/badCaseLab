import React from 'react';
import './ListItem.css';

// 独立的列表展示组件
const ListItem = ({ avatar, name, contentText, contentImage }) => {
  return (
    // 因为虚拟化列表的容器本身并不是一个 <ul>，所以将<li>改为<div>
    // 这会导致 <ul> 内包裹 <div>，进一步导致 DOM 结构不符合 W3C 标准 与 HTML 语义不合法
    // 但我们忽略这一点，暂时使用 <div> 以方便复用
    <div className="list-item-container">
      <img className="avatar" src={avatar} alt="User avatar" />
      <div className="content">
        <strong className="name">{name}</strong>
        <p className="text">{contentText}</p>
        <img className="content-image" src={contentImage} alt="Content" />
        <button className="action-button" onClick={() => alert(`Liked post by ${name}`)}>
          Like
        </button>
      </div>
    </div>
  );
};

export default ListItem;
