import React, { useMemo } from 'react';
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

const Problem = () => {
  // 使用 useMemo 来确保虚拟数据只生成一次
  const mockData = useMemo(() => generateMockData(), []);


  return (
    <SocialMediaLayout>
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
        <h1>S04 - To C: 无尽信息流</h1>
        <p>这个页面一次性渲染了 <strong>{LIST_SIZE}</strong> 个复杂的列表项。</p>
        <p>请尝试快速滚动页面，并注意观察是否出现卡顿或延迟。</p>
      </div>
      
      <ul>
        {mockData.map(item => (
          <ListItem
            key={item.id}
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