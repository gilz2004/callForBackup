import React from 'react';
import styled, { keyframes } from 'styled-components';

const KeyFrames = keyframes`
100% {
  transform: rotate(360deg);
}
`;

const Donut = styled.div`
  padding: 15px;
  border: 6px solid #ccc;
  border-right-color: #888;
  border-radius: 22px;
  animation: ${KeyFrames} 1s infinite linear;
  position: absolute;
  left: 45%;
  top: 50%;
`;

const Loading = (props) => <Donut />;

export default Loading;
