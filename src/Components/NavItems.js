import React from 'react';
import styled from 'styled-components';
import NavItem from './NavItem';

// TODO: remove mock data soon..
// state -> max navItems are going to be 8
const mockNavItems = [
  { id: 1, title: 'תחבורה' },
  { id: 2, title: 'כלכלה' },
  { id: 3, title: 'תחבורה' },
  { id: 4, title: 'כלכלה' },
  { id: 5, title: 'תחבורה' },
  { id: 6, title: 'כלכלה' },
  { id: 7, title: 'תחבורה' },
  { id: 8, title: 'כלכלה' },
];
const NavItemsBox = styled.div`
  line-height: 3px;
  font-size: 10px;
  max-height: 70px;
  border-bottom: 2px solid gray;
  padding: 8px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const NavItems = () => {
  return (
    <NavItemsBox>
      {mockNavItems.map(({ id, title }) => {
        return <NavItem key={id} title={title} />;
      })}
    </NavItemsBox>
  );
};

export default NavItems;
