import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import infoPartners from "routes/partners";

class Partners extends React.Component {
    render() {
        return (
            <>
            <section>
                <Container tag="div">
                    <Row>
                        {infoPartners.map((info, key) => {
                            return (
                                <Col key={key}>
                                    <div className="client-img">
                                        <img src={info.logo}
                                             alt={info.name}
                                             className="img-responsive" />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
            </>
        );
    }
}

export default Partners;