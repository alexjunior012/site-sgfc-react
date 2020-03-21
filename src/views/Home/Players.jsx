import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Players extends React.Component {
    render() {
        return (
            <>
            <section className="player">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="page-title">
                                <h2 className="lead">NOSSOS JOGADORES</h2>
                                <div className="border-style"></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div id="player-caro" className="owl-carousel owl-theme">
                            {/*repete esse bloco*/}
                            <div className="item player-item">
                                <div className="gambar">
                                    <img src="images/player-1.jpg" alt="" className="img-responsive" />
                                </div>
                                <div className="item-body">
                                    <div className="name">
                                        CHRISTIAN RONALDOEL
                                    </div>
                                    <div className="position">
                                        <span className="cf">CF</span> Forwarder
                                    </div>
                                </div>
                            </div>
                            {/*repete esse bloco*/}
                        </div>
                    </div>

                    <div className="player-pagination pagination">
                        <a href="team.html" title="">Visualizar Time</a>
                    </div>

                </div>
            </section>
            </>
        );
    }
}

export default Players;