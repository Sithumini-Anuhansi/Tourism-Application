import React from "react";
import Sidebar from "./Sidebar";
import { Route, Switch } from "react-router-dom";

// Packages
import PackagesList from "./PackagesAdmin/PackagesList";
import PackageForm from "./PackagesAdmin/PackageForm";
import PackageItineraries from "./PackagesAdmin/PackageItineraries";

// Destinations
import DestinationsList from "./DestinationsAdmin/DestinationsList";
import DestinationForm from "./DestinationsAdmin/DestinationForm";

// Bookings
import BookingsList from "./BookingsAdmin/BookingsList";

import "./admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">
      <div className="content-wrapper">
        <Switch>
          {/* Default welcome page */}
          <Route exact path="/admin">
            <div className="welcome-dashboard">
              <h1>Welcome to the Admin Dashboard!</h1>
              <p>Manage your packages, destinations, and bookings easily.</p>
            </div>
          </Route>

          {/* Packages */}
          <Route exact path="/admin/packages" component={PackagesList} />
          <Route path="/admin/packages/add" component={PackageForm} />
          <Route path="/admin/packages/edit/:id" component={PackageForm} />
          <Route path="/admin/packages/:id/itineraries" component={PackageItineraries} />

          {/* Destinations */}
          <Route exact path="/admin/destinations" component={DestinationsList} />
          <Route path="/admin/destinations/add" component={DestinationForm} />
          <Route path="/admin/destinations/edit/:id" component={DestinationForm} />

          {/* Bookings */}
          <Route exact path="/admin/bookings" component={BookingsList} />
        </Switch>
      </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
