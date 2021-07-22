import Image from "../../images/showcase.png";

const PortfolioLanding = () => {
  return (
    <div className="portfolio">
      <div className="row center">
        <div className="col w-50 center">
          <h1 className="portfolio__title">Showcase Your Worth</h1>
          <p className="portfolio__body">
            It’s hard being a uni student, never ending assignments, challenging
            team work and the ever growing stresses of finding a job to match
            you degree. Well say no more - that why Capstone Portfolio is here.
            This is a place where you can showcase your skills, knowledge and
            work you have completed over the Capstone Units to potential
            employers.
          </p>
        </div>
        <div className="col w-50">
          <div className="portfolio__image-container">
            <div className="portfolio__image">
              <img src={Image} alt="cool fun real" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLanding;
