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
import {
  addPost,
  updatePosts,
  fetchPostsAsync,
} from '../../Redux/Actions/postAction';
import Content from '../../Components/Content';
import { writeData, getData } from '../../firebase/firebase';

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

export const createNewPost = (title, pageUrl) => ({
  id: uuidv4(),
  title,
  postCategory: '',
  pageUrl,
  date: new Date(),
  postCounter: 1,
});

const Popup = ({ fetchPostsAsync }) => {
  React.useEffect(() => {
    fetchPostsAsync();
  });

  return (
    <PopUpBox>
      <Header />
      <Tabs />
      <Content />
    </PopUpBox>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchPostsAsync: () => dispatch(fetchPostsAsync()),
});

export default connect(null, mapDispatchToProps)(Popup);
