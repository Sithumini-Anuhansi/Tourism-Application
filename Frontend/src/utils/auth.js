const TOKEN_KEY = "token";
const USER_ID_KEY = "userId";
const USER_NAME_KEY = "userName";
const USER_ROLE_KEY = "role";

export const saveSession = ({ token, userId, name, role }) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_ID_KEY, String(userId));
  localStorage.setItem(USER_NAME_KEY, name || "");
  localStorage.setItem(USER_ROLE_KEY, role || "USER");
};

export const clearSession = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_ID_KEY);
  localStorage.removeItem(USER_NAME_KEY);
  localStorage.removeItem(USER_ROLE_KEY);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const getUserId = () => {
  const id = localStorage.getItem(USER_ID_KEY);
  return id ? Number(id) : null;
};

export const getUserRole = () => localStorage.getItem(USER_ROLE_KEY);

export const isLoggedIn = () => Boolean(getToken());

export const isAdmin = () => getUserRole() === "ADMIN";

export const authHeaders = (json = true) => {
  const headers = {};
  if (json) headers["Content-Type"] = "application/json";
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
};
