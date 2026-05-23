import React from "react";
import { Link, useHistory } from "react-router-dom";
import { clearSession } from "../../utils/auth";
import "./admin.css";

const Sidebar = () => {
  const history = useHistory();

  const handleLogout = () => {
    clearSession();
    history.push("/admin/login");
  };

  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/packages">Packages</Link></li>
        <li><Link to="/admin/destinations">Destinations</Link></li>
        <li><Link to="/admin/bookings">Bookings</Link></li>
      </ul>
      <button type="button" className="admin-logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
