import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <div className="register">
      <form className="form">
        <span className="form__register">Register Account</span>
        <span className="form__caption">By order of the United Federation of Planets, your details are required.</span>
        <input className="form__input" placeholder="Email*" />
        <input className="form__input" placeholder="Password*" />
        <input className="form__input" placeholder="Confirm password*" />
        <div className="form__agree">
          <input
            className="form__checkbox"
            type="checkbox"
          />
          <span className="form__checkbox-caption">I have read and agree to the <Link to="#">Terms &amp; Conditions</Link></span>
        </div>
        <button className="form__button">Register Account</button>
        <button className="form__google"><FontAwesomeIcon icon={faGooglePlusG} className="form__google--icon" />Register with Google</button>
        </form>
    </div>
  );
};

export default RegisterForm;