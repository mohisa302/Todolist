const addTask = (task, listData) => {
  if (!listData) {
    listData = [
      {
        description: task,
        completed: false,
        index: 1,
      },
    ];
  } else {
    listData.push({
      description: task,
      completed: false,
      index: listData.length + 1,
    });
  }
  return listData;
};

export default addTask;
