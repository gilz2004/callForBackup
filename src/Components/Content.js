import React from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import CommandTab from './ReusableComponents/CommandTab';
import { MdEventBusy } from 'react-icons/md';
import { RiFileDownloadLine } from 'react-icons/ri';
import { connect } from 'react-redux';
import NoCallsForHelp from './NoCallsForHelp';

const FooterWrapper = styled.div`
  border-top: 1px solid #fff;
  position: absolute;
  bottom: 0;
  width: 100%;

  // position: fixed;
  // bottom: 10px;
  // width: 95%;
  // border-top: 1px solid #fff;
  // margin-top: 6px;
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

const Content = ({ posts }) => {
  let content;
  if (posts.length > 0) {
    content = (
      <>
        <Posts />
        <FooterWrapper>
          <CommandTab icon={<FirstIconWrapper />} text="פתח הכל" />
          <CommandTab icon={<SecondIconWrapper />} text="בקרוב." />
        </FooterWrapper>
      </>
    );
  } else content = <NoCallsForHelp />;

  return content;
};
const mapStateToProps = (state) => ({
  posts: state.callsForHelp.posts,
});
export default connect(mapStateToProps)(Content);
