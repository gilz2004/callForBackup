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
import { connect } from 'react-redux';
import { addPost } from '../../Redux/Actions/postAction';

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
// const initialCallForHelpPost = {
//   creator: '',
//   id: '',
//   title: '',
// };

const Popup = ({ addPost, posts }) => {
  // const [callForHelpPost, setCallForHelpPost] = React.useState(
  //   initialCallForHelpPost
  // );

  chrome.contextMenus.onClicked.addListener(
    ({ menuItemId, selectionText, pageUrl }) => {
      if (menuItemId === 'selectedData' && selectionText && pageUrl) {
        const newTitle = restrictSelectedTitleLength(selectionText);
        // TODO: CHECK HOW MANY CALL FOR HELP BY THE POST URL.
        // TODO:MAKE SURE THAT HTE USER SELECT ONLY THE FIREST ROW TO SET THE TITLE AS ONLY FIRST ROW STRING
        const newPost = {
          id: uuidv4(),
          title: newTitle,
          postCreator: 'gilz',
          comments: 10,
          postCategory: '',
          callsForHelp: 7,
          pageUrl,
        };
        addPost(newPost);

        //from here push to data base. try and catch!
      }
      return;
    }
  );

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

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
});
export default connect(null, mapDispatchToProps)(Popup);
