import React, { useMemo } from 'react';
import { faker } from '@faker-js/faker';
import { Virtuoso } from 'react-virtuoso';
import ListItem from './ListItem';
import SocialMediaLayout from '../../components/Clayout/SocialMediaLayout';

const LIST_SIZE = 1000;

const generateMockData = () => {
  return Array.from({ length: LIST_SIZE }, (_, index) => ({
    id: index,
    avatar: faker.image.avatar(),
    name: faker.person.fullName(),
    contentText: faker.lorem.paragraph(),
    contentImage: `https://picsum.photos/seed/${index}/400/200`,
  }));
};

const Solved = () => {
  const mockData = useMemo(() => generateMockData(), []);

  return (
    <SocialMediaLayout>
      <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
        <h1>S04 - 解决方案</h1>
        <p>该页面使用了列表虚拟化，并将滚动容器设置为了浏览器主窗口。</p>
      </div>
      
      <Virtuoso
        useWindowScroll // 启用窗口滚动
        data={mockData}
        itemContent={(index, item) => (
          <ListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            contentText={item.contentText}
            contentImage={item.contentImage}
          />
        )}
      />
    </SocialMediaLayout>
  );
};

export default Solved;