export const restrictSelectedTitleLength = (title) => {
  const maxTitleLength = 4;
  const titleRestrictionArray = title.split(' ');
  let newTitle = '';
  for (let i = 0; i < maxTitleLength; i++) {
    if (titleRestrictionArray[i]) newTitle += ' ' + titleRestrictionArray[i];
  }
  return newTitle;
};
