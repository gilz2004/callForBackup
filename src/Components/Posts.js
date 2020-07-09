import React from 'react';
import styled from 'styled-components';
import Post from './Post';
const mockPosts = [
  { id: 1, title: 'אובר ואוו. נורא. מסוכן', callsForHelp: 7, comments: 100 },
  {
    id: 2,
    title: 'פוסט על פיקוח מחירי הדאודורנט',
    callsForHelp: 24,
    comments: 100,
  },
  { id: 3, title: 'אמאזון היא ציר הרשע', callsForHelp: 0, comments: 60 },
  { id: 4, title: 'גוגל לא משלמת מספיק מס', callsForHelp: 0, comments: 7 },
  {
    id: 5,
    title: 'סולידריות עם השובתים בדואר ישראל',
    callsForHelp: 0,
    comments: 4,
  },
];
const PostsBox = styled.div`
  max-height: 250px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

//TODO: add on component load a calculation to figure out the total posts, and show an some arrow that the user will know that he can scroll.
//because the scroll bar is UG and i hidde it. and fix the margin between a half post element to the footer
const Posts = () => {
  return (
    <PostsBox>
      {mockPosts.map(({ id, ...other }) => {
        return <Post key={id} {...other} />;
      })}
    </PostsBox>
  );
};

export default Posts;
