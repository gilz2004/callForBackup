import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 5px;
`;
const Header = () => {
  return <HeaderBox>קריאה לעזרה</HeaderBox>;
};

export default Header;
