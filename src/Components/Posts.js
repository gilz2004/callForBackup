import React from 'react';
import styled from 'styled-components';
import Post, { PostBox } from './Post';
import { connect } from 'react-redux';
import { FaCaretDown } from 'react-icons/fa';

const postsLengthViewLimit = 5;

const PostsBox = styled.div`
  max-height: 210px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const PlaceHolder = styled(PostBox)`
  padding: 0;
  justify-content: center;
  border: none;
  align-items: center;
  height: 20px;
`;

const Posts = ({ posts = [] }) => {
  let scrollIcon =
    posts.length > postsLengthViewLimit ? (
      <PlaceHolder>
        <FaCaretDown />
      </PlaceHolder>
    ) : (
      <PlaceHolder />
    );

  let lastPostItemOnView;
  return (
    <>
      <PostsBox>
        {posts.map(({ id, ...other }, index) => {
          posts.length - 1 === index
            ? (lastPostItemOnView = true)
            : (lastPostItemOnView = false);

          return (
            <Post
              key={id}
              id={id}
              {...other}
              lastPostItem={lastPostItemOnView}
            />
          );
        })}
      </PostsBox>
      {scrollIcon}
    </>
  );
};
const mapStateToProps = (state) => ({
  posts: state.callsForHelp.posts,
});

export default connect(mapStateToProps)(Posts);
