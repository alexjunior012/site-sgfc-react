import React from "react";
import { Link } from "react-router-dom";

import SocialNavbar from './NavbarSocial';

import {
    Container,
    Row,
    Col,
    Collapse,
    Navbar as NavbarReact,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { routes } = this.props;

        return (
            <>
                <div className="containerTopNav">
                    <SocialNavbar/>
                    <div className="menu">
                        <Container>
                            <NavbarReact expand="sm">

                                <div className="logo-sgfc">
                                    <NavbarBrand href="/">
                                        {/*<img src={require('assets/images/logo.png')} className="img-fluid" alt="São Gregório F.C."/>*/}
                                    </NavbarBrand>
                                </div>

                                {/*<div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <a class="navbar-brand" href="http://saogregoriofc.com.br"><img src="images/logo1.png" alt="São Gregório F.C." /></a>
                                </div>*/}

                                <NavbarToggler onClick={this.toggle} />

                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto">
                                        {routes.map((prop, key) => {
                                            return (
                                                <NavItem key={key} className="menu-item">
                                                    <Link className="nav-link"
                                                          to={prop.path}
                                                          key={key}>
                                                        {prop.name}
                                                    </Link>
                                                </NavItem>
                                            );
                                        })}
                                    </Nav>
                                </Collapse>
                            </NavbarReact>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;