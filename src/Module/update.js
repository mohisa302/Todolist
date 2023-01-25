export const clearAll = (listData) => {
  if (listData) {
    listData = listData.filter((task) => !task.completed);
  }
  listData.forEach((taskDay, indexDay) => {
    taskDay.index = indexDay + 1;
  });
  return listData;
};

export const editText = (listData, listElm, taskElm, text) => {
  const index = Array.prototype.indexOf.call(listElm.children, taskElm);
  listData[index].description = text;
  return listData;
};

export const status = () => {};
