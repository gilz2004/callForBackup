import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import NavItems from '../../Components/NavItems';

const PopUpBox = styled.div`
  // border: 1px solid red;
  outline: auto;
  width: 300px;
  min-height: 400px;
`;

const Popup = () => {
  return (
    <PopUpBox>
      <Header />
      <NavItems />
    </PopUpBox>
  );
};

export default Popup;
