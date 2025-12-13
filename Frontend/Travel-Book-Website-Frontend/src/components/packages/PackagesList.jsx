import React, { useEffect, useState } from "react";
import PackageCard from "./PackageCard";
import OffersCarousel from "./OffersCarousel";
import { getAllPackages, getPackagesByCategory, getOffers } from "../../api/packagesApi";
import "./packages.css";

const categories = [
    "Nature & Adventure",
    "Cultural & Historical",
    "Beaches & Relaxation",
    "Wildlife & Safari",
    "Spiritual & Wellness",
    "Luxury & Honeymoon",
    "Food & Culinary"
];

const PackagesList = () => {
    const [packages, setPackages] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        if (!selectedCategory) {
            getAllPackages().then((data) => setPackages(data));
        } else {
            getPackagesByCategory(selectedCategory).then((data) => setPackages(data));
        }
    }, [selectedCategory]);

    useEffect(() => {
        getOffers().then((data) => setOffers(data));
    }, []);

    return (
        <div className="packages-page">
            <OffersCarousel offers={offers} />

            <div className="packages-wrapper">
                <aside className="categories-menu">
                    <h3>Categories</h3>
                    <ul>
                        <li
                            className={!selectedCategory ? "active" : ""}
                            onClick={() => setSelectedCategory("")}
                        >
                            All
                        </li>
                        {categories.map((cat) => (
                            <li
                                key={cat}
                                className={selectedCategory === cat ? "active" : ""}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </aside>

                <div className="packages-container">
                    <h1 className="packages-title">
                        {selectedCategory || "All"} Packages
                    </h1>

                    <div className="packages-grid">
                        {packages.map((pkg) => (
                            <PackageCard key={pkg.packageId} pkg={pkg} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackagesList;
