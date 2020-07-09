import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';

const availableContextMenuPages = ['https://www.facebook.com/*'];

const contextMenuItem = {
  id: 'selectedData',
  title: '>AskFriendsBackup<',
  contexts: ['selection'],
  documentUrlPatterns: availableContextMenuPages,
};

chrome.contextMenus.create(contextMenuItem);
// chrome.contextMenus.onClicked.addListener()
// TODO: REMOVE CONSOLE LOG
console.log('background scripts here.');
