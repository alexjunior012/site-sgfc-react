import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
    Container,
    Row,
    Col,
    NavLink
} from 'reactstrap';

const infoSocial = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/saogregoriofc',
        title: 'Curta nossa página no Facebook',
        icon: faFacebookF,
        status: ''
    },
    {
        name: 'Instagram',
        url: '',
        title: '',
        icon: faInstagram,
        status: ''
    },
    {
        name: 'Youtube',
        url: '',
        title: '',
        icon: faYoutube,
        status: ''
    },
    {
        name: 'Whattsapp',
        url: '',
        title: '',
        icon: faWhatsapp,
        status: ''
    },
];

class NavbarSocial extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <div className="header-top">
                    <Container>
                        <Row>
                            <Col lg="12" md="5" sm="5" xs="12">
                                <div class="top-sosmed pull-right">
                                    {infoSocial.map((info, key) => {
                                        return (
                                            <NavLink
                                                href={info.url}
                                                target="_blank"
                                                title={info.title}
                                                key={key}>
                                                <FontAwesomeIcon icon={info.icon} />
                                            </NavLink>
                                        )
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default NavbarSocial;