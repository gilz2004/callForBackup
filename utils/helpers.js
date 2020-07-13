export const restrictSelectedTitleLength = (title) => {
  const maxTitleLength = 4;
  const titleRestrictionArray = title.split(' ');
  let newTitle = '';
  for (let i = 0; i < maxTitleLength; i++) {
    if (titleRestrictionArray[i]) newTitle += ' ' + titleRestrictionArray[i];
  }
  return newTitle;
};

export const checkForExistsingPost = (posts, url) => {
  console.log('checink', posts);
  const post = posts.find((post) => post.pageUrl === url);
  console.log('post found?>', post);
  if (post) return true;
  return false;
};
