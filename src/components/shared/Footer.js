import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row center">
        <div className="col w-75">
          <h4 className="footer__title">Connect With Deakin</h4>
          <div className="footer__icons">
            <Link
              to="https://www.facebook.com/DeakinUniversity"
              className="footer__link footer__link--facebook"
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="footer__icons--facebook-circle icon-circle"
              />
              <FontAwesomeIcon
                icon={faFacebookF}
                className="footer__icons--facebook icon"
              />
            </Link>
            <Link
              to="https://twitter.com/Deakin?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              className="footer__link footer__link--twitter"
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="footer__icons--twitter-circle icon-circle"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                className="footer__icons--twitter icon"
              />
            </Link>
            <Link
              to="https://www.instagram.com/deakinuniversity/?hl=en"
              className="footer__link footer__link--instagram"
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="footer__icons--instagram-circle icon-circle"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                className="footer__icons--instagram icon"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/school/deakin-university/?trk=nav_type_overview"
              className="footer__link footer__link--linked-in"
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="footer__icons--linked-in-circle icon-circle"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="footer__icons--linked-in icon"
              />
            </Link>
            <Link
              to="https://www.youtube.com/user"
              className="footer__link footer__link--youtube"
            >
              <FontAwesomeIcon
                icon={faCircle}
                className="footer__icons--youtube-circle icon-circle"
              />
              <FontAwesomeIcon
                icon={faYoutube}
                className="footer__icons--youtube icon"
              />
            </Link>
          </div>
          <p className="footer__body w-50">
            We acknowledge the traditional owners of the lands on which Deakin
            University stands and we pay our respect. &copy; Copyright Deakin
            University 2021. Deakin University CRICOS Provider Code: 00113B.
          </p>
        </div>
        <div className="col">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/squads">Squads</Link>
            </li>
            <li className="footer__item">
              <Link to="/pitch">Pitch</Link>
            </li>
            <li className="footer__item">
              <Link to="/allocation">Allocation</Link>
            </li>
            <li className="footer__item">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <ul className="footer__list">
            <li className="footer__item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="footer__item">
              <Link to="/faq">FAQ</Link>
            </li>
            <li className="footer__item">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="footer__item">
              <Link to="/">Sitemap</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
