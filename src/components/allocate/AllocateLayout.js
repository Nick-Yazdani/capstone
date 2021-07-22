import { Fragment } from "react";

import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";

import Logo from "../../images/logo.png";

const basePath = "capstone_allocate"

const navigationItems = [
    {
        name: "Home",
        path: `/${basePath}`
    },
    {
        name: "Squads",
        path: `/${basePath}/squads`
    },
    {
        name: "Pitch",
        path: `/${basePath}/pitch`
    },
    {
        name: "Allocation",
        path: `/${basePath}/allocation`
    },
    {
        name: "About Us",
        path: `${basePath}/about`
    },
]

const logoImage = {
    image: Logo,
    alt: "Allocate logo"
}

const AllocateLayout = ({ children }) => {
    return (
        <Fragment>
            <Navigation items={navigationItems} basePath={basePath} logoImage={logoImage} />
            {children}
            <Footer />
        </Fragment>
    )
}

export default AllocateLayout;