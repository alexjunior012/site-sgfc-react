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
            <Container fluid>
                <Row>
                    <SocialNavbar/>
                    <Col xl={12} md={12} sm={12}>
                        <NavbarReact color="light" light expand="md">
                            <NavbarBrand href="/">SGFC</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    {routes.map((prop, key) => {
                                        return (
                                            <NavItem key={key}>
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
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default Navbar;