import React from "react";
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import Banner from './Banner';
import Partners from "layout/Partners/Partners";
import News from './News';
import NextMatch from './NextMach/NextMatch';
import Players from './Players';
import Gallery from './Gallery';

class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
            <section>
                <Banner/>
            </section>

            <section className="bg-azul container-partners">
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <Partners/>
                    </Col>
                </Row>
            </section>

            <section className="padding bg-gray">
                <Container>
                    <Row>
                        <Col lg="7" md="7" sm="7" xs="7">
                            <News/>
                        </Col>
                        <Col lg="5" md="5" sm="5" xs="5">
                            <NextMatch/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12">
                            <Players/>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="gallery">
                <Gallery/>
            </section>

            <section className="">

            </section>
            </>
        );
    }
}

export default Home;