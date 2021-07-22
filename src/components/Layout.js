import { Fragment } from "react";

import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <Fragment>
            <Navigation />
            {children}
            <Footer />
        </Fragment>
    )
}

export default Layout;