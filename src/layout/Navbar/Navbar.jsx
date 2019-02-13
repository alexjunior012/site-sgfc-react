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
                <SocialNavbar/>
                <div className="menu">
                    <Container>
                        <NavbarReact expand="sm">

                            <NavbarBrand href="/">SGFC</NavbarBrand>

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
            </>
        );
    }
}

export default Navbar;