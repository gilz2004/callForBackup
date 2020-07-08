import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #ecf0f1;
`;
const Header = () => {
  return <HeaderBox>*Header Text*</HeaderBox>;
};

export default Header;
