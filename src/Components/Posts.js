import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import { connect } from 'react-redux';

const PostsBox = styled.div`
  max-height: 210px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

//TODO: add on component load a calculation to figure out the total posts, and show an some arrow that the user will know that he can scroll.
//because the scroll bar is UG and i hidde it. and fix the margin between a half post element to the footer
const Posts = ({ posts }) => {
  return (
    <PostsBox>
      {posts.map(({ id, ...other }) => {
        return <Post key={id} id={id} {...other} />;
      })}
    </PostsBox>
  );
};
const mapStateToProps = (state) => ({
  posts: state.callsForHelp.posts,
});

export default connect(mapStateToProps)(Posts);
