import { ENDPOINTS } from "./config";
import { authHeaders } from "../utils/auth";

const BASE_URL = ENDPOINTS.bookings;

export const getBookingsByUserId = async (userId) => {
  const res = await fetch(`${BASE_URL}/user/${userId}`, { headers: authHeaders(false) });
  if (!res.ok) throw new Error("Failed to load bookings");
  return res.json();
};

export const getBookingById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { headers: authHeaders(false) });
  return res.json();
};

export const createBooking = async (bookingData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(bookingData),
  });
  return res.json();
};

export const updateBooking = async (id, bookingData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(bookingData),
  });
  return res.json();
};

export const deleteBooking = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: authHeaders(false),
  });
  return res.ok;
};

export const getBookingsByType = async (type) => {
  const res = await fetch(`${BASE_URL}?type=${type}`);
  return res.json();
};

export const getBookingsByPackage = async (packageId) => {
  const res = await fetch(`${BASE_URL}?packageId=${packageId}`);
  return res.json();
};
