import HowCard from "./HowCard";


const How = ({ cardData, title, body }) => {
  return (
    <div className="how">
      <h2 className="how__heading">{title}</h2>
      <p className="how__body">
        {body}
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
