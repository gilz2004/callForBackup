import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import { wrapStore } from 'webext-redux';
import { reduxStore } from '../../Redux/Store/store';
import { database } from 'firebase';

wrapStore(reduxStore);
const availableContextMenuPages = ['https://www.facebook.com/*'];

const contextMenuItem = {
  id: 'selectedData',
  title: '>AskFriendsBackup<',
  contexts: ['all'],
  documentUrlPatterns: availableContextMenuPages,
};

chrome.contextMenus.create(contextMenuItem);

console.log('background scripts here.');
