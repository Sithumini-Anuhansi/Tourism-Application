import React, { useEffect, useState } from "react";
import "./destinations.css";
<<<<<<< HEAD
import CategoryCarousel from "./CategoryCarousel";

const BASE_URL = "http://localhost:8083/api/destinations";

// Fetch destinations grouped by category
const getDestinationsByCategories = async () => {
=======

const BASE_URL = "http://localhost:8083/api/destinations";

// API call: fetch destinations grouped by category
export const getDestinationsByCategories = async () => {
>>>>>>> a40f62b6b26da60b346839080a58d59df6360986
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
<<<<<<< HEAD
        } catch {
=======
        } catch (err) {
>>>>>>> a40f62b6b26da60b346839080a58d59df6360986
            setError("Error loading destinations.");
        } finally {
            setLoading(false);
        }
    };

<<<<<<< HEAD
    // Scroll to category section when carousel heading is clicked
    const scrollToCategory = (categoryId) => {
        const section = document.getElementById(categoryId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="destinations-page">

            {/* Carousel with click-to-scroll */}
            <CategoryCarousel onCategoryClick={scrollToCategory} />
=======
    return (
        <div className="destinations-page">
            <h1>Explore Destinations</h1>
>>>>>>> a40f62b6b26da60b346839080a58d59df6360986

            {loading && <p className="loading">Loading destinations...</p>}
            {error && <p className="error">{error}</p>}

<<<<<<< HEAD
            {!loading && !error &&
                Object.entries(destinationsByCategory).map(([category, destinations]) => {
                    // Convert category name into an ID (same names used in carousel)
                    const categoryId = category
                        .toLowerCase()
                        .replace(/&/g, "")
                        .replace(/\s+/g, "-");

                    return (
                        <section key={category} id={categoryId} className="category-section">
                            <h2>{category}</h2>

                            {Array.isArray(destinations) && destinations.length > 0 ? (
                                <div className="destination-cards">
                                    {destinations.map((dest) => (
                                        <div key={dest.id} className="destination-card">
                                            <img
                                                src={dest.imageUrl || "/default.jpg"}
                                                alt={dest.name}
                                                className="destination-image"
                                            />
                                            <div className="destination-info">
                                                <h3>{dest.name}</h3>
                                                <p className="location">{dest.location}</p>
                                                <p className="description">
                                                    {dest.description || "No description available."}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="no-results">
                                    No destinations found in this category.
                                </p>
                            )}
                        </section>
                    );
                })}
=======
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
>>>>>>> a40f62b6b26da60b346839080a58d59df6360986
        </div>
    );
};

export default Destinations;
