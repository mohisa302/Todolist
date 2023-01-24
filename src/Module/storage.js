export const saveStorage = (data) => {
  localStorage.setItem('tasks', JSON.stringify(data));
};

export const loadStorage = () =>
  JSON.parse(localStorage.getItem('tasks')) || [];
