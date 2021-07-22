import { Link } from "react-router-dom"

const LoginForm = () => {
    return (
        <div className="login">
            <form className="form">
                <span className="form__welcome">Welcome back</span>
                <span className="form__login">Log In</span>
                <input className="form__input" placeholder="Enter email" />
                <input className="form__input" placeholder="Enter password" />
                <button className="form__button">Login</button>
                <span className="form__sign-up">Don't have an account? <Link to="#">Sign Up Now</Link></span>
                <Link className="form__forgot" to="#">Forgot password?</Link>
            </form>
        </div>
    )
}

export default LoginForm;