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
                                <Col>
                                    <div className="client-img">
                                        <img src={info.logo} alt={info.name} className="img-responsive" />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </section>
            {/*<!-- CLIENT SECTION -->
            <div class="section stat-client p-main bg-client">
                <div class="container">
                    <div class="row">

                        <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                            <div class="client-img">
                                <img src="images/client1.png" alt="" class="img-responsive" />
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                            <div class="client-img">
                                <img src="images/client2.png" alt="" class="img-responsive" />
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                            <div class="client-img">
                                <img src="images/client3.png" alt="" class="img-responsive" />
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                            <div class="client-img">
                                <img src="images/client4.png" alt="" class="img-responsive" />
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                            <div class="client-img">
                                <img src="images/client5.png" alt="" class="img-responsive" />
                            </div>
                        </div>

                        <div class="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                            <div class="client-img">
                                <img src="images/client6.png" alt="" class="img-responsive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/}
            </>
        );
    }
}

export default Partners;