import React, { useEffect, useMemo, useRef } from 'react';
import { faker } from '@faker-js/faker';
import ListItem from './ListItem';
import './ListItem.css';

import SocialMediaLayout from '../../components/Clayout/SocialMediaLayout';

// 定义列表的大小，方便调整
const LIST_SIZE = 1000;

// 生成虚拟数据的函数
const generateMockData = () => {
  return Array.from({ length: LIST_SIZE }, (_, index) => ({
    id: index,
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    contentText: faker.lorem.paragraph(),
    // 使用 picsum.photos 来获取不同尺寸的图片，更稳定
    contentImage: `https://picsum.photos/seed/${index}/400/200`,
  }));
};

const Problem = ({ onRenderComplete }) => {
  // 使用 useMemo 来确保虚拟数据只生成一次
  const mockData = useMemo(() => generateMockData(), []);

  const lastElementRef = useRef(null);

  useEffect(() => {
    if (typeof onRenderComplete !== 'function' || !lastElementRef.current) {
      return;
    }

    // 当目标元素进入视口时，执行回调
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0].isIntersecting 意味着目标元素至少有1像素在视口内
        if (entries[0].isIntersecting) {
          // 成功观察到最后一个元素，证明浏览器已完成布局
          onRenderComplete();
          observer.disconnect();
        }
      },
      {
        // root: null 表示相对于浏览器视口
        // threshold: 0 表示元素刚出现1像素就触发
        root: null,
        threshold: 0,
      }
    );

    observer.observe(lastElementRef.current);
    return () => observer.disconnect();
    
  }, [onRenderComplete]);

  return (
    <SocialMediaLayout>
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
        <h1>S04 - To C: 无尽信息流</h1>
        <p>这个页面一次性渲染了 <strong>{LIST_SIZE}</strong> 个复杂的列表项。</p>
        <p>请尝试快速滚动页面，并注意观察是否出现卡顿或延迟。</p>
      </div>
      
      <ul>
        {mockData.map((item, index) => (
          <ListItem
            key={item.id}
            ref={index === mockData.length - 1 ? lastElementRef : null}
            avatar={item.avatar}
            name={item.name}
            contentText={item.contentText}
            contentImage={item.contentImage}
          />
        ))}
      </ul>
    </SocialMediaLayout>
  );
};

export default Problem;