import React from "react";

import {
    Container,
    Row,
    Col,
    NavLink
} from 'reactstrap';

class NavbarSocial extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <div className="header-top">
                    <Container>
                        <Row>
                            <Col lg="12" md="5" sm="5" xs="12">
                                <div className="top-sosmed pull-right">
                                    <NavLink
                                        href="https://www.facebook.com/saogregoriofc"
                                        target="_blank"
                                        title="Curta a nossa pagina no facebook">
                                        <span className="fa fa-facebook"></span>
                                    </NavLink>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default NavbarSocial;