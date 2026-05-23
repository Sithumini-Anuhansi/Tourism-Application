const trimSlash = (url) => (url || "").replace(/\/$/, "");

export const API = {
  AUTH: trimSlash(process.env.REACT_APP_AUTH_URL || "http://localhost:8081"),
  BOOKINGS: trimSlash(process.env.REACT_APP_BOOKINGS_URL || "http://localhost:8082"),
  DESTINATIONS: trimSlash(process.env.REACT_APP_DESTINATIONS_URL || "http://localhost:8083"),
  PACKAGES: trimSlash(process.env.REACT_APP_PACKAGES_URL || "http://localhost:8084"),
};

// Full path helpers
export const ENDPOINTS = {
  bookings: `${API.BOOKINGS}/bookings`,
  destinations: `${API.DESTINATIONS}/api/destinations`,
  packages: `${API.PACKAGES}/packages`,
  adminPackages: `${API.PACKAGES}/api/admin/packages`,
  adminDestinations: `${API.DESTINATIONS}/api/admin/destinations`,
  adminBookings: `${API.BOOKINGS}/api/admin/bookings`,
  adminItineraries: `${API.PACKAGES}/admin/packages`,
};
