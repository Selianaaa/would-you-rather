const saveByKey = (key, $value) => {
  localStorage.setItem(key, JSON.stringify($value));
};

const getByKey = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export default {
  saveByKey,
  getByKey,
};
