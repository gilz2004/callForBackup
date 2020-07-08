import React from 'react';
import styled from 'styled-components';

const TabItemBox = styled.span`
  color: black;
  border: 2px solid white;
  cursor: pointer;
  opacity: ${({ pickedItem }) => (pickedItem ? '1' : '0.7')};
  border-bottom: ${({ pickedItem }) =>
    pickedItem ? '2px solid #f39c12' : '2px solid white'};
  background: #f4f5f9;
  padding: 8px;
  outline: none;
  text-align: center;
  border-radius: 5px;
`;
const TabItem = ({ title }) => {
  const [pickedItem, setPickedItem] = React.useState(false);
  const handleNavPicker = () => {
    setPickedItem(!pickedItem);
  };

  return (
    <TabItemBox pickedItem={pickedItem} onClick={handleNavPicker}>
      <span>{title}</span>
    </TabItemBox>
  );
};

export default TabItem;
