import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class News extends React.Component {
    render() {
        return (
            <>
            <Container tag="div">
                <Row>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <div className="page-title">
                            <h2 className="lead">ULTIMAS NOTICIAS</h2>
                            <div className="border-style"></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {/*esse container tem que se repetir*/}
                    <Col lg="12" md="12" sm="12" xs="12">
                        <div className="blog-item">
                            <div className="gambar">
                                <div className="date">
                                    May 29, 2015
                                </div>
                                <img src="images/blog-img-1.jpg"
                                     alt=""
                                     className="img-responsive" />
                            </div>
                            <div className="item-body">
                                <div className="description">
                                    <p className="lead">
                                        <a href="news-single.html" title="">We give you good documentation to make easy to understand about this templates and the features.</a>
                                    </p>
                                    <a href="news-single.html" title="" className="readmore">Read More</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    {/*esse container tem que se repetir*/}
                </Row>
            </Container>
            </>
        );
    }
}

export default News;