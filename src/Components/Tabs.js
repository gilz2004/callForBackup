import React from 'react';
import styled from 'styled-components';
import TabItem from './TabItem';

// TODO: remove mock data soon..
// state -> max navItems are going to be 8
const mockTabs = [
  { id: 1, title: 'תחבורה' },
  { id: 2, title: 'כלכלה' },
  { id: 3, title: 'תחבורה' },
  { id: 4, title: 'כלכלה' },
  { id: 5, title: 'תחבורה' },
  { id: 6, title: 'כלכלה' },
  { id: 7, title: 'תחבורה' },
  { id: 8, title: 'כלכלה' },
];
const TabsBox = styled.div`
  line-height: 3px;
  font-size: 14px;
  max-height: 70px;
  border-bottom: 2px solid #ecf0f1;
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 3px;
  background: #fff;
`;

const Tabs = () => {
  return (
    <TabsBox>
      {mockTabs.map(({ id, title }) => {
        return <TabItem key={id} title={title} />;
      })}
    </TabsBox>
  );
};

export default Tabs;
