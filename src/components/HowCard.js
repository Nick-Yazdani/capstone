import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const HowCard = ({ icon, title, body, cta, path }) => {
    return (
        <div className="card">
            <FontAwesomeIcon icon={icon} className="card__icon" />
            <h4 className="card__title">{title}</h4>
            <p className="card__body">{body}</p>
            <Link to={path} className="card__link">{cta}</Link>
        </div>
    )
}

export default HowCard;