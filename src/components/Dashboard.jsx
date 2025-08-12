import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { NavD } from "./NavD";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");

useEffect(() => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
   console.log("🧑 Logged-in user:", user, user.fullName); 
  if (!token) {
    navigate("/login");
  } else if (user?.fullName) {
    setFullName(user.fullName);
     console.log("✅ Found fullName:", user.fullName);
  }
}, [navigate]);
  

  

  return (
   <div className="dashboard-container">
    <NavD/>
    <div className="dashboard-body">
      <div className="text-heading">
        <h1>Pamper your skin</h1>
        <p className="text-body">with our abnesABNES<span className="no1">No.1</span> product</p>
        <button>Shop Now</button>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
        