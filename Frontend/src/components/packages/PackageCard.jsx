import React from "react";
import { useHistory } from "react-router-dom";

const PackageCard = ({ pkg }) => {
    const history = useHistory();

    return (
        <div className="package-card" onClick={() => history.push(`/packages/${pkg.packageId}`)}>
            <img src={pkg.imageUrl} alt={pkg.title} className="package-img" />
            <h2 className="package-title">{pkg.title}</h2>
            <p><b>Duration:</b> {pkg.duration}</p>
            <p><b>Best For:</b> {pkg.bestFor}</p>
            <p><b>Main Destinations:</b> {pkg.mainDestinations}</p>
            <p><b>Price:</b> ${pkg.price}</p>
            <p><b>Max People:</b> {pkg.peopleCount}</p>

            <button
                className="see-more-btn"
                onClick={(e) => {
                    e.stopPropagation(); // prevent triggering card click
                    history.push(`/packages/${pkg.packageId}`);
                }}
            >
                See More
            </button>
        </div>
    );
};

export default PackageCard;
