/* global chrome */
import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import Tabs from '../../Components/Tabs';

import { v4 as uuidv4 } from 'uuid';
import {
  restrictSelectedTitleLength,
  checkForExistsingPost,
} from '../../../utils/helpers';
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
  const creaeNewPost = (title, pageUrl) => ({
    id: uuidv4(),
    title,
    postCategory: '',
    pageUrl,
    date: new Date(),
    postCounter: 1,
  });

  React.useEffect(() => {
    const realTimeUpdate = listenToData('posts');
    const populateAppData = async () => {
      try {
        realTimeUpdate.on('value', (snapShot) => {
          //TODO : GET ONLY THE LAST CHANGED DATA PIECE.
          //This solution will loop each time over the all posts array. = not efficient  = waste!
          let posts = [];
          snapShot.forEach((snap) => {
            posts.push(snap.val());
          });
          updatePosts(posts);
        });
      } catch (err) {
        console.error('Problem with fetching data from Server', err);
      }
    };
    populateAppData();
    return () => realTimeUpdate.off();
  });

  // child_added
  chrome.contextMenus.onClicked.addListener(
    async ({ menuItemId, selectionText, pageUrl }) => {
      if (menuItemId === 'selectedData' && selectionText && pageUrl) {
        const newTitle = restrictSelectedTitleLength(selectionText);
        const newPost = creaeNewPost(newTitle, pageUrl);
        try {
          await writeData(newPost);
        } catch (err) {
          console.error(err);
        }
      }
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
