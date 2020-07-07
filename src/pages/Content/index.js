// import { printLine } from './modules/print';

// console.log('Content script works!');
// // console.log('Must reload extension for modifications to take effect.');
// printLine('Welcome to FaceBook extension - By Gil');
// const menu = document.querySelector('.swg4t2nn');
// const hr = document.createElement('hr');
// menu.appendChild(hr);
// const menuItem = document.querySelector('.oajrlxb2');

// const outerMenu = document.querySelector('.o8kakjsu');

import React from 'react';
import { render } from 'react-dom';
import App from '../../components/App';

const appendElement = () => {
  //TODO:ASYNC CALL TO THE MENU MAKES THE FIRST RENDER OF THE MENU TO SHOW NULL.//ON THE SECOND CLICK ALL WORKS.
  // FIX THIS BUG
  //AND MAKE SURE EACH ... BUTTON CLICKED THEN OPEN the MENU WITH MY CUSTOM TAB.
  //AND UNSUBSCRIBE FROM THE EVENT ?
  const menu = document.querySelector('._54ng');
  console.log(menu, 'menu');
  const extension = document.createElement('div');
  extension.id = 'gilExtension';
  menu.appendChild(extension);
  render(<App />, document.getElementById('gilExtension'));
};

const togglerBtn = document.querySelector('._4xev');

togglerBtn.addEventListener('click', appendElement);
