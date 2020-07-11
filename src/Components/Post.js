/* global chrome */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removePost } from '../Redux/Actions/postAction';

const PostBox = styled.div`
  height: 40px;
  border-bottom: 2px solid #f0f0f2;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 16px;
`;
const PostNumbers = styled.div`
  opacity: 0.7;
`;

const Post = ({
  id,
  title,
  callsForHelp,
  comments,
  pageUrl,
  removePost,
  ...other
}) => {
  const removePostMsg = 'מחק קריאה';

  const handleTabClick = () => {
    chrome.tabs.create({
      url: `${pageUrl}`,
    });
  };

  return (
    <PostBox>
      <Title onClick={handleTabClick}>{title}</Title>
      <PostNumbers onClick={() => removePost(id)}>{removePostMsg}</PostNumbers>
    </PostBox>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removePost: (id) => dispatch(removePost(id)),
});
export default connect(null, mapDispatchToProps)(Post);
