import React, { useEffect, useState } from "react";
import "./destinations.css";

const BASE_URL = "http://localhost:8083/api/destinations";

// API call: fetch destinations grouped by category
export const getDestinationsByCategories = async () => {
    try {
        const response = await fetch(`${BASE_URL}/by-categories`);
        if (!response.ok) throw new Error("Failed to fetch destinations.");
        return response.json();
    } catch (error) {
        console.error(error);
        return {};
    }
};

const Destinations = () => {
    const [destinationsByCategory, setDestinationsByCategory] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadDestinations();
    }, []);

    const loadDestinations = async () => {
        try {
            const data = await getDestinationsByCategories();
            setDestinationsByCategory(data || {});
        } catch (err) {
            setError("Error loading destinations.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="destinations-page">
            <h1>Explore Destinations</h1>

            {loading && <p className="loading">Loading destinations...</p>}
            {error && <p className="error">{error}</p>}

            {!loading &&
                !error &&
                Object.entries(destinationsByCategory).map(([category, destinations]) => (
                    <div key={category} className="category-section">
                        <h2>{category}</h2>

                        {Array.isArray(destinations) && destinations.length > 0 ? (
                            <div className="destination-cards">
                                {destinations.map((dest) => (
                                    <div key={dest.id ?? Math.random()} className="destination-card">
                                        <img src={dest.imageUrl ?? "/default.jpg"} alt={dest.name ?? "Destination"} />
                                        <div className="destination-info">
                                            <h3>{dest.name ?? "Unknown Name"}</h3>
                                            <p className="location">{dest.location ?? "Unknown Location"}</p>
                                            <p className="description">{dest.description ?? "No description available."}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="no-results">No destinations found in this category.</p>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default Destinations;
