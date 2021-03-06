import AllocateLayout from "../../components/allocate/AllocateLayout";


import AllocateLogoA from "../../images/ph_allocate_logo_only.png";
import PortfolioLogo from "../../images/Portfolio_Logo.png";

const About = () => {
  return (
    <AllocateLayout>
      <div className="about">
        <h1 className="about__title">About Us</h1>
        <div className="about__container">
          <div className="row w-75">
            <div className="col w-75">
              <h4 className="about__subtitle">Capstone Allocate</h4>
              <p className="about__body">
                The Capstone Management Platform has been designed to facilitate
                the efficient management of Deakin students into Capstone
                Projects and showcase student contributions. Being built over a
                number of trimesters the project began with a number of initial
                design elements but then in 2020/2021 it was agreed with the
                product owner to pivot the project to reflect the change in how
                the units would be operated. Some application elements such as
                Sortera, Worklog and Capstone Teams were put on hold to focus on
                two complimentary applications; Allocate and Portfolio.
                "Capstone Allocate" will be a central repository to show case
                Capstone projects and also facilitate the process of students
                nominating their squad preferences, which they will later pitch
                for a position to join.
              </p>
            </div>
            <div className="col center">
              <div>
                <img
                  className="about__logo"
                  src={AllocateLogoA}
                  alt="Allocate logo without text"
                />
              </div>
            </div>
          </div>
          <div className="row w-75">
            <div className="col center">
              <div>
                <img
                  className="about__logo"
                  src={PortfolioLogo}
                  alt="Portfolio logo"
                />
              </div>
            </div>
            <div className="col w-75">
              <h4 className="about__subtitle">Capstone Portfolio</h4>
              <p className="about__body">
                The Capstone Management Platform has been designed to facilitate
                the efficient management of Deakin students into Capstone
                Projects and showcase student contributions. Being built over a
                number of trimesters the project began with a number of initial
                design elements but then in 2020/2021 it was agreed with the
                product owner to pivot the project to reflect the change in how
                the units would be operated. Some application elements such as
                Sortera, Worklog and Capstone Teams were put on hold to focus on
                two complimentary applications; Allocate and Portfolio.
                "Capstone Allocate" will be a central repository to show case
                Capstone projects and also facilitate the process of students
                nominating their squad preferences, which they will later pitch
                for a position to join.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AllocateLayout>
  );
};

export default About;
