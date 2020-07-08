import React from 'react';
import styled from 'styled-components';
import { DiProlog } from 'react-icons/di';
const AppBox = styled.div`
  border-top: 1px solid gray;
  padding: 8px 12px;
  display: flex;
  min-height: 24px;
  align-items: center;
`;

const ExtensionIcon = styled(DiProlog)`
  width: 16px;
  height: 16px;
`;

const ExtensionText = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 0 7px;
`;

const App = () => {
  return (
    <AppBox>
      <ExtensionIcon />
      <ExtensionText>Hey DaviD</ExtensionText>
    </AppBox>
  );
};

export default App;
