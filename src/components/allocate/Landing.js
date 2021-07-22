import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <div className="landing">
      <h1 className="landing__heading">Welcome to Capstone Allocate</h1>
      <p className="landing__body">
        This is the destination to explore all that each Capstone Project has to
        offer. Each Capstone Project will showcase the project objective,
        project roadmap, technology stack utilised, and skills required by the
        student squad. This site allows students not only to be thoroughly
        informed about each project but also facilitates the process for
        students nominating their squad preferences later in the trimester.
      </p>
      <div className="landing__group">
          <Link to="/squads" className="btn btn--dark btn--outline-dark">View Squads</Link>
          <Link to="/pitch" className="btn btn--dark btn--outline-dark">Make a Pitch</Link>
      </div>
    </div>
  );
};

export default Landing;
