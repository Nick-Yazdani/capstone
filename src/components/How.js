import HowCard from "./HowCard";
import { faBriefcase, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";

const cardData = [
    {
        title: 'Step #1 Squads',
        body: 'Explore all of the available squads this trimester',
        cta: 'Discover',
        icon: faBriefcase,
        path: '#'
    },
    {
        title: 'Step #2 Find Info',
        body: 'Discover more information about the squad and the project',
        cta: 'Discover',
        icon: faLifeRing,
        path: '#'
    },
    {
        title: 'Step #3 Apply',
        body: 'Chosen a Squad that suits you? Now submit your application',
        cta: 'Discover',
        icon: faWrench,
        path: '#'
    }
]

const How = () => {
  return (
    <div className="how">
      <h2 className="how__heading">How it works</h2>
      <p className="how__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
        debitis maxime delectus commodi ab consequuntur.
      </p>
      <div className="cards">
        {cardData.map(card => {
            return <HowCard icon={card.icon} title={card.title} body={card.body} cta={card.cta} path={card.path} />
        })}
      </div>
    </div>
  );
};

export default How;
