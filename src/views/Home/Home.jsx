import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import Banner from './Banner';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <Banner/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;