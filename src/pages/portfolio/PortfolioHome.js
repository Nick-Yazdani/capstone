import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import PortfolioLanding from "../../components/portfolio/PortfolioLanding";
import PortfolioLayout from "../../components/portfolio/PortfolioLayout";
import How from "../../components/shared/How";

const cardData = [
    {
        title: 'Lorem',
        body: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
        cta: 'Discover',
        icon: faBriefcase,
        path: '#'
    },
    {
        title: 'Lorem',
        body: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
        cta: 'Discover',
        icon: faBriefcase,
        path: '#'
    },
    {
        title: 'Lorem',
        body: 'At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.',
        cta: 'Discover',
        icon: faBriefcase,
        path: '#'
    }
]

const landingTitle = "How it works"
const landingBody = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis maxime delectus commodi ab consequuntur."


const PortfolioHome = () => {
    return (
        <PortfolioLayout>
            <PortfolioLanding />
            <How cardData={cardData} title={landingTitle} body={landingBody} />
        </PortfolioLayout>
    )
}

export default PortfolioHome;