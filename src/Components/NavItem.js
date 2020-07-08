import React from 'react';
import styled from 'styled-components';

const NavItemBox = styled.button`
  border: 2px solid white;
  cursor: pointer;
  opacity: ${({ pickedItem }) => (pickedItem ? '1' : '0.6')};
  border-bottom: ${({ pickedItem }) =>
    pickedItem ? '2px solid #d4a3b6' : '2px solid white'};
  background: #f4f5f9;
  width: max-content;
  justify-self: center;
  padding: 5px;
  outline: none;
`;
const NavItem = ({ title }) => {
  const [pickedItem, setPickedItem] = React.useState(false);
  const handleNavPicker = () => {
    setPickedItem(!pickedItem);
  };

  return (
    <NavItemBox pickedItem={pickedItem} onClick={handleNavPicker}>
      <span>{title}</span>
    </NavItemBox>
  );
};

export default NavItem;
