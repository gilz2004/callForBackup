/* global chrome */
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
const initialTitle = '';

const Popup = () => {
  const [callForHelpTitle, setCallForHelpTitle] = React.useState(initialTitle);

  // TODO : REMOVE THIS FUNCTION TO UTILS.JS
  //REFACTOR PRO  - MAYBE UNDO THE FOR LOOP
  const titleRestriction = (title) => {
    const titlmaxTitleWords = 4;
    const titleRestrictionArray = title.split(' ');
    let newTitle = '';
    for (let i = 0; i < titlmaxTitleWords; i++) {
      newTitle += ' ' + titleRestrictionArray[i];
    }
    return newTitle;
  };

  chrome.contextMenus.onClicked.addListener(({ menuItemId, selectionText }) => {
    const restrictedTitle = titleRestriction(selectionText);
    if (menuItemId === 'selectedData' && selectionText) {
      return setCallForHelpTitle(restrictedTitle);
      //from here push to data base. try and catch!
    }
    return;
  });

  console.log('call for hlp post title', callForHelpTitle);
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
