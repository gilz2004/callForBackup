/* global chrome */
import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Tabs from '../../Components/Tabs';
import Posts from '../../Components/Posts';
import CommandTab from '../../Components/ReusableComponents/CommandTab';
import { MdEventBusy } from 'react-icons/md';
import { RiFileDownloadLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';
import { restrictSelectedTitleLength } from '../../../utils/helpers';

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
const initialCallForHelpPost = {
  creator: '',
  id: '',
  title: '',
};

const Popup = () => {
  const [callForHelpPost, setCallForHelpPost] = React.useState(
    initialCallForHelpPost
  );

  chrome.contextMenus.onClicked.addListener(
    ({ menuItemId, selectionText, pageUrl }) => {
      if (menuItemId === 'selectedData' && selectionText && pageUrl) {
        const newTitle = restrictSelectedTitleLength(selectionText);
        return setCallForHelpPost((oldCallForHelpPost) => {
          return {
            ...oldCallForHelpPost,
            id: uuidv4(),
            title: newTitle,
            creator: 'gil',
          };
        });
        //when db set, todo: remove the return from setState
        //from here push to data base. try and catch!
      }
      return;
    }
  );
  console.log(callForHelpPost);
  return (
    <PopUpBox>
      <Header />
      <Tabs />
      <Posts />
      <CommandTabWrapper>
        <CommandTab icon={<FirstIconWrapper />} text="פתח הכל" />
        <CommandTab icon={<SecondIconWrapper />} text="בקרוב." />
      </CommandTabWrapper>
    </PopUpBox>
  );
};

export default Popup;
