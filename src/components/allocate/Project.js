import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="project container">
      <div className="row">
        <div className="col w-100 video">
          <iframe
            width="421"
            height="222"
            src="https://www.youtube.com/embed/z4Xjdem2h_Y"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="col w-100">
          <h2 className="project__title w-50">Capstone Management Platform</h2>
          <span className="project__caption">
            Capstone Managment Platform - Squad 1 Trimester 3 2020
          </span>
          <div className="project__link">
            <Link
              to="/squads"
              className="project__link btn btn--outline-turqoise btn--turqoise btn--large"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
