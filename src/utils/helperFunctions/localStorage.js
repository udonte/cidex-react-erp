import ls from "localstorage-slim"


export const addUserToLocalStorage = (userData) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);

  return null;
};

export const addToLocalStorage = (item) => {
  localStorage.setItem(item.key, JSON.stringify(item.value));
};


export const removeItemFromLocalStorage = (key) => {
  ls.remove(key)
  return true
}
export const checkItemInLocalStorage = (key) => {
  return true ? ls.get(key) : false
}


export const setItemToLocalStorage = (key, value) => {
  try {
    ls.set(key, value, { encrypt: true });
  } catch (e) {
    throw new Error(e)
  }
}
export const getItemFromLocalStorage = (key) => {
  try {
    return ls.get(key, { decrypt: true });
  } catch (e) {
    throw new Error(e)
  }

}