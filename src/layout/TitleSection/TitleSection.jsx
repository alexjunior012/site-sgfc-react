import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class TitleSection extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <section className="bannerSection">
                    <Container>
                        <Row>
                            <Col lg="12" md="12" sm="12" xs="12">
                                <div className="title">{this.props.titleSection}</div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default TitleSection;