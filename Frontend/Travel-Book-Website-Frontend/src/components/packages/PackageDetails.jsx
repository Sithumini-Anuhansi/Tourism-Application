import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import PackageCard from "./PackageCard";
import {
    getPackageById,
    getItineraryByPackageId,
    getRelatedPackages
} from "../../api/packagesApi";
import "./packageDetails.css";

const PackageDetails = () => {
    const { id } = useParams();
    const history = useHistory();

    const [pkg, setPackage] = useState(null);
    const [itinerary, setItinerary] = useState([]);
    const [relatedPackages, setRelatedPackages] = useState([]);

    useEffect(() => {
        getPackageById(id).then((data) => {
            setPackage(data);
            if (data.category) {
                getRelatedPackages(data.category, id).then((related) => setRelatedPackages(related));
            }
        });

        getItineraryByPackageId(id).then((data) => setItinerary(data));
    }, [id]);

    if (!pkg) return <div className="loading">Loading...</div>;

    return (
        <div className="package-details-container">
            <button className="back-btn" onClick={() => history.push("/packages")}>
                ← Back
            </button>

            <div className="details-header">
                <img src={pkg.imageUrl} alt={pkg.title} className="details-img" />
                <div className="details-info">
                    <h1>{pkg.title}</h1>
                    <p><b>Duration:</b> {pkg.duration}</p>
                    <p><b>Best For:</b> {pkg.bestFor}</p>
                    <p><b>Main Destinations:</b> {pkg.mainDestinations}</p>
                    <p><b>Price:</b> ${pkg.price}</p>
                    <p><b>Max People:</b> {pkg.peopleCount}</p>
                    <button className="book-btn">Book Now</button>
                </div>
            </div>

            <h2 className="itinerary-title">Day-by-Day Itinerary</h2>
            <div className="itinerary-list">
                {itinerary.map((day) => (
                    <div key={day.itineraryId} className="itinerary-item">
                        <h3>Day {day.dayNumber}</h3>
                        <p>{day.description}</p>
                    </div>
                ))}
            </div>

            {relatedPackages.length > 0 && (
                <div className="related-packages">
                    <h2>Other Packages in {pkg.category}</h2>
                    <div className="packages-grid">
                        {relatedPackages.map((rpkg) => (
                            <PackageCard key={rpkg.packageId} pkg={rpkg} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackageDetails;
