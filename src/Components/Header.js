import React from 'react';
import styled from 'styled-components';

const HeaderBox = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid gray;
`;
const Header = () => {
  return <HeaderBox>*Header Text*</HeaderBox>;
};

export default Header;
