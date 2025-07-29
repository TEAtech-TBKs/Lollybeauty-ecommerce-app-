import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Dashboard.css";

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
  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActive = (path) => location.pathname === path;

  

  return (
    <div className="dashboard-body">
          <marquee behavior="" direction="">lollyBeauty Skincaere and cosmetics welcomes you to our official website</marquee>
        
    
      <main className="main-content">
                <section class="layout">
                  <div class="sidebar">1</div>
                  <div class="body">2</div>
                </section>
      </main>
      
    </div>
  );
};

export default Dashboard;
