import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Sobre extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col lg="12" md="5" sm="5" xs="12">
                        <h1>Sobre nós</h1>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}

export default Sobre;