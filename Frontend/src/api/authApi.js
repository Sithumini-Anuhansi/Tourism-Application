import { API } from "./config";

const AUTH_URL = `${API.AUTH}/api/auth`;

export const login = async (email, password) => {
  const res = await fetch(`${AUTH_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(typeof data === "string" ? data : "Login failed");
  }
  return data;
};

export const register = async ({ email, password, name, phone }) => {
  const res = await fetch(`${AUTH_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password, name, phone }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(typeof data === "string" ? data : "Registration failed");
  }
  return data;
};
