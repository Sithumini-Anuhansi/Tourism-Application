import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getOffers } from "../../api/packagesApi";
import "./packages.css";

const OffersCarousel = () => {
  const [offers, setOffers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getOffers().then(data => setOffers(data));
  }, []);

  return (
    <div className="offers-carousel-container">
      <div className="offers-carousel">
        {offers.map((offer) => (
          <div
            key={offer.offerId}
            className="offer-slide"
            onClick={() => history.push(`/packages/${offer.packageId}`)}
          >
            <img src={offer.imageUrl} alt={`Offer ${offer.offerTitle}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersCarousel;
