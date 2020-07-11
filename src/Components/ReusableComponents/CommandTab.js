/* global chrome */
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
const CommandTabBox = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f2;
  cursor: pointer;
`;
const TextBox = styled.div`
  font-size: 18px;
  color: #f39c12;
`;

const IconBox = styled.div`
  margin-right: 5px;
  display: flex;
  align-self: flex-end;
`;

const CommandTab = ({ text, icon, posts }) => {
  const handleClick = () => {
    if (text === 'פתח הכל') {
      const limitTabAmount = 3;
      posts.forEach(({ pageUrl }, index) => {
        if (index < limitTabAmount) {
          chrome.tabs.create({ url: `${pageUrl}` });
        }
      });
    }
  };

  return (
    <CommandTabBox onClick={handleClick}>
      <TextBox>{text}</TextBox>
      <IconBox>{icon}</IconBox>
    </CommandTabBox>
  );
};
const mapStateToProps = (state) => ({
  posts: state.callsForHelp.posts,
});
export default connect(mapStateToProps)(CommandTab);
