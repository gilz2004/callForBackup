import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-decoration: underline;
`;
const NoCallsForHelp = () => {
  return <Box>אין קריאות לעזרה, כרגע!</Box>;
};

export default NoCallsForHelp;
