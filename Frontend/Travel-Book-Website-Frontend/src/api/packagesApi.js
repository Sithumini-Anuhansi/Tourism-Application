const BASE_URL = "http://localhost:8084/packages";

// Get all packages
export const getAllPackages = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

// Get packages by category
export const getPackagesByCategory = async (category) => {
  const res = await fetch(`${BASE_URL}/category/${encodeURIComponent(category)}`);
  return res.json();
};

// Get package by ID
export const getPackageById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

// Get itinerary by package
export const getItineraryByPackageId = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}/itinerary`);
  return res.json();
};

// Get related packages by category excluding current
export const getRelatedPackages = async (category, excludeId) => {
  const res = await fetch(`${BASE_URL}/category/${encodeURIComponent(category)}/related/${excludeId}`);
  return res.json();
};

// Get offers from package_offers table
export const getOffers = async () => {
  const res = await fetch(`${BASE_URL}/offers`);
  return res.json();
};
