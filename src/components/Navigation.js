import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";

const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <div className="center w-25">
          <li className="navigation__item navigation__logo">
            <Link to="/" className="link link--nobefore">
              <img src={Logo} alt="Allocate logo" className="link__logo" />
            </Link>
          </li>
        </div>
        <div className="center w-50">
          <li className="navigation__item">
            <Link to="/" className={location.pathname === "/" ? "link link--active" : "link" }>
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/squads" className={location.pathname === "/squads" ? "link link--active" : "link" }>
              Squads
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/pitch" className={location.pathname === "/pitch" ? "link link--active" : "link" }>
              Pitch
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/allocation" className={location.pathname === "/allocation" ? "link link--active" : "link" }>
              Allocation
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/about" className={location.pathname === "/about" ? "link link--active" : "link" }>
              About Us
            </Link>
          </li>
        </div>
        <div className="center w-25">
          <li className="navigation__item">
            <Link
              to="/login"
              className="btn btn--outline-turqoise btn--turqoise btn--uppercase"
            >
              Login
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/register"
              className="btn btn--outline-turqoise btn--turqoise btn--uppercase"
            >
              Sign Up
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
