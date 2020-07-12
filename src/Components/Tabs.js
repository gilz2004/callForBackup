import React from 'react';
import styled from 'styled-components';
import TabItem from './TabItem';

// TODO: remove mock data soon..
// state -> max navItems are going to be 8
const mockTabs = [{ id: 1, title: 'כללי' }];
const TabsBox = styled.div`
  line-height: 3px;
  max-height: 70px;
  border-right: 3px solid #34495e;
  border-left: 3px solid #34495e;
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
