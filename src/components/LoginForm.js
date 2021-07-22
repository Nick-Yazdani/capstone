import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="login">
      <form className="form">
        <span className="form__welcome">Welcome back</span>
        <span className="form__login">Log In</span>
        <input className="form__input" placeholder="Email" />
        <input className="form__input" placeholder="Password" />
        <div className="form__remember">
          <input
            className="form__checkbox"
            type="checkbox"
          />
          <span className="form__checkbox-caption">Remember me?</span>
        </div>
        <button className="form__button">Login</button>
        <span className="form__sign-up">
          Don't have an account? <Link to="/register">Sign Up Now</Link>
        </span>
        <span className="form__forgot">
          <Link to="#">Forgot password?</Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
