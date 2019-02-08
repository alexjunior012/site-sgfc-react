import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIgloo, faCertificate } from '@fortawesome/free-solid-svg-icons';
import {
    Container,
    Row,
    Col,
    NavLink
} from 'reactstrap';

const infoSocial = [
    {
        name: 'Facebook',
        url: '',
        title: '',
        icon: faIgloo,
        status: ''
    },
    {
        name: 'Instagram',
        url: '',
        title: '',
        icon: faIgloo,
        status: ''
    },
    {
        name: 'Youtube',
        url: '',
        title: '',
        icon: faIgloo,
        status: ''
    },
    {
        name: 'Whattsapp',
        url: '',
        title: '',
        icon: faCertificate,
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