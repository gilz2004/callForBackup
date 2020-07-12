/* global chrome */
import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Tabs from '../../Components/Tabs';

import { v4 as uuidv4 } from 'uuid';
import { restrictSelectedTitleLength } from '../../../utils/helpers';
import { connect } from 'react-redux';
import { addPost, updatePosts } from '../../Redux/Actions/postAction';
import Content from '../../Components/Content';
import { writeData, listenToData } from '../../firebase/firebase';

const PopUpBox = styled.div`
  background: #34495e;
  outline: auto;
  color: white;
  width: 300px;
  min-height: 400px;
  direction: rtl;
  font-family: 'Bellefair', serif;
  position: relative;
`;

const Popup = ({ addPost, updatePosts }) => {
  React.useEffect(() => {
    const realTimeUpdate = listenToData('posts');
    realTimeUpdate.on('value', async (snapShot) => {
      try {
        const response = await snapShot.val();
        if (response) {
          const posts = Object.values(response);
          updatePosts(posts);
        }
      } catch (err) {
        console.log('Something wrong', err);
      }
    });
  }, []);

  chrome.contextMenus.onClicked.addListener(
    async ({ menuItemId, selectionText, pageUrl }) => {
      if (menuItemId === 'selectedData' && selectionText && pageUrl) {
        const newTitle = restrictSelectedTitleLength(selectionText);
        // TODO: CHECK HOW MANY CALL FOR HELP BY THE POST URL.
        // TODO:MAKE SURE THAT HTE USER SELECT ONLY THE FIREST ROW TO SET THE TITLE AS ONLY FIRST ROW STRING
        const newPost = {
          id: uuidv4(),
          title: newTitle,
          postCategory: '',
          pageUrl,
          data: new Date(),
        };
        try {
          await writeData(newPost);
          addPost(newPost);
        } catch (err) {
          console.log(err);
        }
        //from here push to data base. try and catch!
      }
      return;
    }
  );

  return (
    <PopUpBox>
      <Header />
      <Tabs />
      <Content />
    </PopUpBox>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPost: (post) => dispatch(addPost(post)),
  updatePosts: (posts) => dispatch(updatePosts(posts)),
});
export default connect(null, mapDispatchToProps)(Popup);
