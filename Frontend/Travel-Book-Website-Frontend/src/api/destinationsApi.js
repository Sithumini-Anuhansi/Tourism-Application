const BASE_URL = "http://localhost:8083/api/destinations";

export const getAllDestinations = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch all destinations.");
    return response.json();
};

export const getDestinationById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error("Destination not found.");
    return response.json();
};

export const createDestination = async (data) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const updateDestination = async (id, data) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return response.json();
};

export const deleteDestination = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Failed to delete destination.");
};

export const getDestinationsByCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/by-categories`);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (err) {
        console.error("Failed to fetch destinations:", err);
        throw err; // This allows your component to handle the error
    }
};
