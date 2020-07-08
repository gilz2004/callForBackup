import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Tabs from '../../Components/Tabs';
import Posts from '../../Components/Posts';
import CommandTab from '../../Components/ReusableComponents/CommandTab';
import { MdEventBusy } from 'react-icons/md';
import { RiFileDownloadLine } from 'react-icons/ri';
const PopUpBox = styled.div`
  background: #34495e;
  outline: auto;
  color: white;
  width: 300px;
  min-height: 400px;
  direction: rtl;
  font-family: 'Bellefair', serif;
`;

const CommandTabWrapper = styled.div`
  // position: fixed;
  // bottom: 10px;
  // width: 300px;
`;

const FirstIconWrapper = styled(RiFileDownloadLine)`
  width: 20px;
  height: 20px;
  opacity: 0.4;
`;

//TODO : FIX THIS DRY CODE NEEDED !!!!!!
const SecondIconWrapper = styled(MdEventBusy)`
  width: 20px;
  height: 20px;
  opacity: 0.4;
`;

const Popup = () => {
  return (
    <PopUpBox>
      <Header />
      <Tabs />
      <Posts />
      <CommandTabWrapper>
        <CommandTab icon={<FirstIconWrapper />} text="פתח הכל" />
        <CommandTab icon={<SecondIconWrapper />} text="בפיתוח" />
      </CommandTabWrapper>
    </PopUpBox>
  );
};

export default Popup;
