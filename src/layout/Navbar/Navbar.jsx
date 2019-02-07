import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import SocialNavbar from './NavbarSocial';

import {
    Container,
    Row,
    Col,
    Navbar as NavbarReact,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const { routes } = this.props;

        return (
            <>
                <div className="navbar navbar-main navbar-fixed-top">
                    <SocialNavbar/>
                    <Container>
                        <div class="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavbarBrand href="http://saogregoriofc.com.br">
                                <img src="images/logo1.png" alt="São Gregório F.C." />
                            </NavbarBrand>
                        </div>
                        <Collapse>
                            <NavbarReact className="navbar-collapse collapse">
                                <Nav className="nav navbar-nav navbar-right">
                                    <Switch>
                                        {routes.map((prop, key) => {
                                            return (
                                                <NavItem key={key}>
                                                    <Route
                                                        path={prop.path}
                                                        component={prop.component}
                                                        key={key}
                                                    >
                                                    <NavLink>{prop.name}</NavLink>
                                                    </Route>
                                                </NavItem>
                                            );
                                        })}
                                    </Switch>
                                </Nav>
                            </NavbarReact>
                        </Collapse>
                    </Container>
                </div>
            </>
        );
    }
}

export default Navbar;