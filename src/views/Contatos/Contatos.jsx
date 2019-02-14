import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import TopSection from 'layout/TitleSection/TitleSection';

class Contatos extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleSection: 'Contatos'
        }
    }

    render() {
        return (
            <>
                <TopSection titleSection={this.state.titleSection} />
            </>
        );
    }
}

export default Contatos;