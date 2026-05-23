import { ENDPOINTS } from "./config";

const BASE_URL = ENDPOINTS.packages;

/* -------------------- GET -------------------- */

export const getAllPackages = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getPackagesByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/category/${encodeURIComponent(category)}`);
  return res.json();
};

export const getPackageById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const getItineraryByPackageId = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}/itinerary`);
  return res.json();
};

export const getRelatedPackages = async (category, excludeId) => {
  const res = await fetch(
    `${BASE_URL}/category/${encodeURIComponent(category)}/related/${excludeId}`
  );
  return res.json();
};

export const getOffers = async () => {
  const res = await fetch(`${BASE_URL}/offers`);
  return res.json();
};

export const getPackageOffer = async (packageId) => {
  try {
    const res = await fetch(`${BASE_URL}/${packageId}/offer`);
    if (res.status === 200) return res.json();
    return null;
  } catch (error) {
    console.error("Error fetching package offer:", error);
    return null;
  }
};
