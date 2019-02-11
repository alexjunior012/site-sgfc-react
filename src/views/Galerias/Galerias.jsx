import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Galerias extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col lg="12" md="5" sm="5" xs="12">
                        <h1>Galerias</h1>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default Galerias;