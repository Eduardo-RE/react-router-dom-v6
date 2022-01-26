import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "blue")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "blue")}
            to="/about"
          >
            about
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "blue")}
            to="/users"
          >
            users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
