import React from 'react';
import styled from 'styled-components';
const CommandTabBox = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f2;
  cursor: pointer;
`;
const TextBox = styled.div`
  font-size: 18px;
  color: #f39c12;
`;

const IconBox = styled.div`
  margin-right: 5px;
  display: flex;
  align-self: flex-end;
`;

const CommandTab = ({ text, icon }) => {
  return (
    <CommandTabBox>
      <TextBox>{text}</TextBox>
      <IconBox>{icon}</IconBox>
    </CommandTabBox>
  );
};

export default CommandTab;
