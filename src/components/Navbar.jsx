// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        LollyBeauty
      </Link>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar-actions">
        <Link to="/login" className="login-link">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
        <Link to="/cart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-count"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
