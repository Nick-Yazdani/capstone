import { Link, useLocation } from "react-router-dom";

const Navigation = ({ items, basePath, logoImage }) => {
  const location = useLocation();
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <div className="center w-25">
          <li className="navigation__item navigation__logo">
            <Link to={basePath} className="link link--nobefore">
              <img
                src={logoImage.image}
                alt={logoImage.alt}
                className="link__logo"
              />
            </Link>
          </li>
        </div>
        <div className="center w-50">
          {items.map((item) => {
            return (
              <li className="navigation__item">
                <Link
                  to={item.path}
                  className={
                    location.pathname === item.path
                      ? "link link--active"
                      : "link"
                  }
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="center w-25">
          <li className="navigation__item">
            <Link
              to={`/${basePath}/login`}
              className="btn btn--outline-turqoise btn--turqoise btn--uppercase"
            >
              Login
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to={`/${basePath}/register`}
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
