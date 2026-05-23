import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../api/authApi";
import { saveSession } from "../../utils/auth";
import "../admin/admin.css";

const AdminLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("admin@travelbook.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await login(email, password);
      if (data.role !== "ADMIN") {
        setError("This account is not an admin.");
        return;
      }
      saveSession(data);
      history.push("/admin");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <p className="admin-login-hint">Dev default: admin@travelbook.com / admin123</p>
        {error && <p className="admin-login-error">{error}</p>}
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
