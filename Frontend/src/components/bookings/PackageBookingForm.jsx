import React, { useState, useEffect } from "react";
import { createBooking } from "../../api/bookingsApi";
import { getPackageById, getPackageOffer } from "../../api/packagesApi";
import { getUserId } from "../../utils/auth";
import { useParams } from "react-router-dom";
import "./packageBookingForm.css";

const PackageBookingForm = () => {
  const { id } = useParams();

  const [pkg, setPackage] = useState(null);
  const [offer, setOffer] = useState(null);
  const [travelDate, setTravelDate] = useState("");
  const [people, setPeople] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getPackageById(id).then((data) => {
      setPackage(data);
      setPeople(data?.peopleCount || 1);

      getPackageOffer(id).then((offerData) => {
        setOffer(offerData);
      });
    });
  }, [id]);

  if (!pkg) {
    return <p>Loading package details...</p>;
  }

  const handleBooking = () => {
    if (!travelDate || !name || !phone || people <= 0) {
      alert("Please fill all required fields correctly");
      return;
    }

    const discount = offer ? offer.discountPercentage : 0;
    const pricePerPerson = pkg.price - (pkg.price * discount) / 100;
    const totalPrice = pricePerPerson * people;

    const bookingData = {
      bookingType: "PACKAGE",
      packageTitle: pkg.title,
      destination: pkg.mainDestinations,
      travelDate: travelDate,
      people: people,
      days: pkg.duration ? parseInt(pkg.duration) : 1,
      totalPrice: totalPrice,
      name: name,
      phone: phone,
      userId: getUserId() || null,
    };

    createBooking(bookingData)
      .then(() => alert("Package booked successfully!"))
      .catch((err) => {
        console.error("Booking failed:", err);
        alert("Booking failed. Please try again.");
      });
  };

  return (
    <div className="package-booking-form">
      <div className="package-header">
        <h2>BOOK PACKAGE</h2>
        <img
          src={pkg.imageUrl}
          alt={pkg.title}
          className="package-booking-img"
        />
        <h3>{pkg.title}</h3>
      </div>

      <p><b>Destinations:</b> {pkg.mainDestinations}</p>
      <p><b>Duration:</b> {pkg.duration}</p>
      <p><b>Price per person:</b> ${pkg.price}</p>

      {offer && (
        <p className="offer">
          Offer: {offer.discountPercentage}% OFF → $
          {(pkg.price - (pkg.price * offer.discountPercentage) / 100).toFixed(2)}
        </p>
      )}

      <label>
        Full Name:
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Phone Number:
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>

      <label>
        Travel Date:
        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
        />
      </label>

      <label>
        People Count:
        <input
          type="number"
          min={1}
          max={pkg.peopleCount || 10}
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
        />
      </label>

      <label>
        Total Price:
        <input
          type="text"
          readOnly
          value={`$${(
            people *
            (pkg.price - (offer ? (pkg.price * offer.discountPercentage) / 100 : 0))
          ).toFixed(2)}`}
        />
      </label>

      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default PackageBookingForm;
