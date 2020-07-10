import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

import { wrapStore } from 'webext-redux';
import { store as normalReduxStore } from '../../Redux/Store/store';

const store = normalReduxStore;
wrapStore(store);

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
