import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import TopSection from 'layout/TitleSection/TitleSection';

class Noticias extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleSection: 'Noticias'
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

export default Noticias;