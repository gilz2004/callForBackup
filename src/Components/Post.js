import React from 'react';
import styled from 'styled-components';

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

const Post = ({ title, callsForHelp, comments }) => {
  let numberToRender, comment;
  callsForHelp === 0
    ? (numberToRender = comments)
    : (numberToRender = callsForHelp);

  numberToRender === callsForHelp
    ? (comment = 'קריאות לעזרה')
    : (comment = 'תגובות');

  return (
    <PostBox onClick={() => console.log('picked post')}>
      <Title>{title}</Title>
      <PostNumbers>{`${numberToRender} ${comment}`}</PostNumbers>
    </PostBox>
  );
};

export default Post;
