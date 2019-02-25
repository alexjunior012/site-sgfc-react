import React from "react";
import Partners from "layout/Partners/Partners.jsx";
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
            <section>
                <Banner/>
                {/*<Container>
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">

                        </Col>
                    </Row>
                </Container>*/}
            </section>

            <section className="bg-azul">
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <Partners/>
                    </Col>
                </Row>
            </section>

            <section className="next-match">
                <div className="bg-overlay">
                    <Container>
                        <Row>
                            <Col lg="12" md="12" sm="12" xs="12">
                                <Row>
                                    <Col lg="4" md="4" sm="4" xs="4">
                                        <div className="match-club">
                                            <img src={require('assets/images/logo.png')} alt="" />
                                            <div className="club-name">PROSOCCER</div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="4" xs="4">
                                        <div className="match-description">
                                            <div className="liga-name">LIGA PREMIERE</div>
                                            <div className="liga-date">JUNE 16, 17:00</div>
                                            <div className="liga-vs">VS</div>
                                            <div className="liga-location">STADION JAKABARING<br />PEKANBARU</div>
                                        </div>
                                    </Col>
                                    <Col lg="4" md="4" sm="4" xs="4">
                                        <div className="match-club">
                                            <img src={require('assets/images/logo.png')} alt="" />
                                            <div className="club-name">JUPENTUS</div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>


            </>
        );
    }
}

export default Home;