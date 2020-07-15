import '../../assets/img/icon-34.png';
import '../../assets/img/icon-128.png';
import { wrapStore } from 'webext-redux';
import { reduxStore } from '../../Redux/Store/store';
import { restrictSelectedTitleLength } from '../../../utils/helpers';
import { createNewPost } from '../Popup/Popup';
import { writeData } from '../../firebase/firebase';
import { v4 as uuidv4 } from 'uuid';
wrapStore(reduxStore);
const availableContextMenuPages = ['https://www.facebook.com/*'];

chrome.runtime.onInstalled.addListener(() => {
  const contextMenuItem = {
    id: 'selectedData',
    title: '>AskFriendsBackup<',
    contexts: ['all'],
    documentUrlPatterns: availableContextMenuPages,
  };
  chrome.contextMenus.create(contextMenuItem);
});

chrome.contextMenus.onClicked.addListener(async (menuContextData) => {
  const { menuItemId, frameUrl, pageUrl, selectionText } = menuContextData;
  if (menuItemId === 'selectedData' && selectionText && frameUrl) {
    const newTitle = restrictSelectedTitleLength(selectionText);
    const newPost = createNewPost(newTitle, frameUrl);
    try {
      await writeData(newPost);
    } catch (err) {
      console.error('Something went wrong', err);
    }
  }
});

console.log('background scripts here.');
