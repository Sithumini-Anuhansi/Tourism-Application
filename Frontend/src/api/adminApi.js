import { ENDPOINTS } from "./config";
import { authHeaders } from "../utils/auth";

const PACKAGES_ADMIN = ENDPOINTS.adminPackages;
const ITINERARIES_ADMIN = ENDPOINTS.adminItineraries;
const DESTINATIONS_ADMIN = ENDPOINTS.adminDestinations;
const BOOKINGS_ADMIN = ENDPOINTS.adminBookings;

const adminFetch = async (url, options = {}) => {
  const res = await fetch(url, {
    ...options,
    headers: { ...authHeaders(), ...options.headers },
  });
  if (res.status === 401 || res.status === 403) {
    throw new Error("Admin access denied. Please log in again.");
  }
  return res;
};

export const getAllPackages = async () => {
  const res = await adminFetch(PACKAGES_ADMIN);
  return res.json();
};

export const getPackageById = async (id) => {
  const res = await adminFetch(`${PACKAGES_ADMIN}/${id}`);
  return res.json();
};

export const createPackage = async (packageData) => {
  const res = await adminFetch(PACKAGES_ADMIN, {
    method: "POST",
    body: JSON.stringify(packageData),
  });
  return res.json();
};

export const updatePackage = async (id, packageData) => {
  const res = await adminFetch(`${PACKAGES_ADMIN}/${id}`, {
    method: "PUT",
    body: JSON.stringify(packageData),
  });
  return res.json();
};

export const deletePackage = async (id) => {
  const res = await adminFetch(`${PACKAGES_ADMIN}/${id}`, { method: "DELETE" });
  return res.ok;
};

export const getPackageItineraries = async (packageId) => {
  const res = await adminFetch(`${ITINERARIES_ADMIN}/${packageId}/itineraries`);
  return res.json();
};

export const addItinerary = async (packageId, itineraryData) => {
  const res = await adminFetch(`${ITINERARIES_ADMIN}/${packageId}/itineraries`, {
    method: "POST",
    body: JSON.stringify(itineraryData),
  });
  return res.json();
};

export const deleteItinerary = async (itineraryId) => {
  const res = await adminFetch(`${ITINERARIES_ADMIN}/itinerary/${itineraryId}`, {
    method: "DELETE",
  });
  return res.ok;
};

export const getAllDestinations = async () => {
  const res = await adminFetch(DESTINATIONS_ADMIN);
  return res.json();
};

export const getDestinationById = async (id) => {
  const res = await adminFetch(`${DESTINATIONS_ADMIN}/${id}`);
  return res.json();
};

export const createDestination = async (destinationData) => {
  const res = await adminFetch(DESTINATIONS_ADMIN, {
    method: "POST",
    body: JSON.stringify(destinationData),
  });
  return res.json();
};

export const updateDestination = async (id, destinationData) => {
  const res = await adminFetch(`${DESTINATIONS_ADMIN}/${id}`, {
    method: "PUT",
    body: JSON.stringify(destinationData),
  });
  return res.json();
};

export const deleteDestination = async (id) => {
  const res = await adminFetch(`${DESTINATIONS_ADMIN}/${id}`, { method: "DELETE" });
  return res.ok;
};

export const getAllBookings = async () => {
  const res = await adminFetch(BOOKINGS_ADMIN);
  return res.json();
};

export const getBookingById = async (id) => {
  const res = await adminFetch(`${BOOKINGS_ADMIN}/${id}`);
  return res.json();
};

export const updateBooking = async (id, bookingData) => {
  const res = await adminFetch(`${BOOKINGS_ADMIN}/${id}`, {
    method: "PUT",
    body: JSON.stringify(bookingData),
  });
  return res.json();
};

export const deleteBooking = async (id) => {
  const res = await adminFetch(`${BOOKINGS_ADMIN}/${id}`, { method: "DELETE" });
  return res.ok;
};
