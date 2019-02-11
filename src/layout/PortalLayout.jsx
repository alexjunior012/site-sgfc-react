import React from "react";
import { Route, Switch } from "react-router-dom";

import AnimationLoader from "./AnimationLoader";
import NavbarPortal from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

import routes from "../routes/routesSidebar.js";

class PortalLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <AnimationLoader/>
                <NavbarPortal
                    {...this.props}
                    routes={routes}
                />
                <Switch>
                    {routes.map((prop, index) => {
                        if (this.props.location.pathname == prop.path) {
                            return (
                                <Route
                                    key={index}
                                    path={prop.path}
                                    component={prop.component}
                                />
                            )
                        }
                    })}
                </Switch>
                <Footer/>
            </>
        );
    }
}

export default PortalLayout;