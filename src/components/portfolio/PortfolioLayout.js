import { Fragment } from "react";

import Navigation from "../shared/Navigation";
import Footer from "../shared/Footer";

import Logo from "../../images/port_new.png"

const basePath = "capstone_portfolio"

const navigationItems = [
    {
        name: "Home",
        path: `/${basePath}`
    },
    {
        name: "About Me",
        path: `/${basePath}/about`
    },
    {
        name: "Work",
        path: `/${basePath}/work`
    },
    {
        name: "Skill",
        path: `/${basePath}/skills`
    },
    {
        name: `Showcase`,
        path: `/${basePath}/showcase`
    },
    {
        name: "Resume",
        path: `/${basePath}/resume`
    }
]

const logoImage = {
    image: Logo,
    alt: "Portfolio logo"
}

const PortfolioLayout = ({ children }) => {
    return (
        <Fragment>
            <Navigation items={navigationItems} logoImage={logoImage} basePath={basePath} />
            {children}
            <Footer />
        </Fragment>
    )
}

export default PortfolioLayout;