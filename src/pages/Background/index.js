import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import axios from 'axios';
import store from '../../Redux/Store/store';

const availableContextMenuPages = ['https://www.facebook.com/*'];

const contextMenuItem = {
  id: 'selectedData',
  title: '>AskFriendsBackup<',
  contexts: ['all'],
  documentUrlPatterns: availableContextMenuPages,
};

chrome.contextMenus.create(contextMenuItem);
// TODO: REMOVE CONSOLE LOG
console.log('background scripts here.');
