import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <>
            <footer>
                <div className="footer-nav">
                    <Container tag="div">
                        <Row>
                            <Col lg={3} md={3} sm={6} xs={12}>
                                <div className="footerItem">
                                    <div className="title-footer">
                                        <h4>SOBRE O CLUB</h4>
                                    </div>
                                    <p>
                                        This template is a micro niche for business categories, namely Pro Soccer business.
                                        there was an excess of this template is using HTML/CSS. Condimentum aliquam, mollit magna velit nec,
                                        tempor cursus vitae sit aliquet neque purus. Ultrices lacus proin conubia dictum tempus,
                                        tempor pede vitae faucibus
                                    </p>
                                    <div className="social-networks-footer">
                                        <a href="https://www.facebook.com/saogregoriofc" target="_blank" title="Curta a nossa pagina no facebook">
                                            <div className="item">
                                                <i className="fa fa-facebook"></i>
                                            </div>
                                        </a>
                                        <a href="#" title="">
                                            <div className="item">
                                                <i className="fa fa-twitter"></i>
                                            </div>
                                        </a>
                                        <a href="#" title="">
                                            <div className="item">
                                                <i className="fa fa-youtube-play"></i>
                                            </div>
                                        </a>
                                        <a href="#" title="">
                                            <div className="item">
                                                <i className="fa fa-instagram"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={6} md={3} sm={6} xs={12}>
                                <div className="footerItem">
                                    <div className="title-footer">
                                        <h4>MENU</h4>
                                    </div>
                                    <ul className="sitemap">
                                        <li><a href="http://saogregoriofc.com.br/times" title="">Home</a></li>
                                        <li><a href="http://saogregoriofc.com.br/sobre" title="">Sobre</a></li>
                                        <li><a href="http://saogregoriofc.com.br/times" title="">Times</a></li>
                                        <li><a href="http://saogregoriofc.com.br/galeria" title="">Galeria</a></li>
                                        <li><a href="http://saogregoriofc.com.br/noticias" title="">Notícias</a></li>
                                        <li><a href="http://saogregoriofc.com.br/loja" title="">Loja</a></li>
                                        <li><a href="http://saogregoriofc.com.br/contato" title="">Contato</a></li>
                                        <li><a href="http://saogregoriofc.com.br/parceiros" title="">Parceiros</a></li>
                                        <li><a href="http://saogregoriofc.com.br/politica-de-privacidade" title="">Politica de Privacidade</a></li>
                                    </ul>
                                </div>
                            </Col>

                            <Col lg={3} md={3} sm={6} xs={12}>
                                <div className="footerItem">
                                    <div className="title-footer">
                                        <h4>NEWSLETTER</h4>
                                    </div>
                                    <div className="form-newsletter">
                                        <form action="#">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-default">Enviar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='copyright'>
                    <Container tag="div">
                        <Row>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <p>São Gregório F.C. &copy; {(new Date).getFullYear()}</p>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <a href="https://a12technology.com" title="A12 Technology">
                                    <img src={require("assets/images/a12technology.png")}
                                         className="img-responsive logoa12"
                                         alt="A12 Technology"/>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
            </>
        );
    }
}

export default Footer;