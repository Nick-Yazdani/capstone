import { faBriefcase, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";

import How from "../../components/shared/How";
import Landing from "../../components/allocate/Landing";
import AllocateLayout from "../../components/allocate/AllocateLayout";
import Project from "../../components/allocate/Project";


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

const landingTitle = "How it works"
const landingBody = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis debitis maxime delectus commodi ab consequuntur."

const AllocateHome = () => {
    return (
        <AllocateLayout>
            <Landing />
            <How cardData={cardData} title={landingTitle} body={landingBody} />
            <Project />
        </AllocateLayout>
    )
}

export default AllocateHome;