import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Container,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import infoSocial from "routes/SocialNetworks";

class NavbarSocial extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <div className="top-social-nav">
                    <Container>
                        <Nav tag='nav'>
                            {infoSocial.map((info, key) => {
                                return (
                                    <NavItem key={key}>
                                        <NavLink
                                            href={info.url}
                                            target="_blank"
                                            title={info.title}>
                                            <FontAwesomeIcon icon={info.icon} />
                                        </NavLink>
                                    </NavItem>
                                )
                            })}
                        </Nav>
                    </Container>
                </div>
            </>
        );
    }
}

export default NavbarSocial;