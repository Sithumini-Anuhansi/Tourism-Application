import React, { useEffect, useState } from "react";
import { getOffers } from "../../api/packagesApi";
import "./packages.css";

const OffersCarousel = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    getOffers().then(data => setOffers(data));
  }, []);

  return (
    <div className="offers-carousel">
      {offers.map((offer) => (
        <div key={offer.offerId} className="offer-slide">
          <img src={offer.imageUrl} alt={offer.offerTitle} />
          <div className="offer-text">
            {offer.offerTitle} - {offer.discountPercentage}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default OffersCarousel;
