import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Gallery extends React.Component {
    render() {
        return (
            <>
            <Container>
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <div className="page-title">
                            <h2 className="lead">GALERIA DE FOTOS</h2>
                            <div className="border-style"></div>
                        </div>
                    </Col>
                </Row>
                <Row className="popup-gallery">
                    {/*repete esse bloco*/}
                    <Col lg="3" md="3" sm="3" xs="3">
                        <div className="w-item">
                            <a href="images/gallery-1.jpg" title="Gallery #1">
                                <img src="images/gallery-1.jpg" alt="" className="img-responsive" />
                                <div className="project-info">
                                    <div className="project-icon">
                                        <span className="fa fa-search"></span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>
                    {/*repete esse bloco*/}
                </Row>
                <div className="loadmore">
                    <a href="#" title="">See More</a>
                </div>
            </Container>
            </>
        );
    }
}

export default Gallery;