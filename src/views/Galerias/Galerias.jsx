import React from "react";

import {
    Container,
    Row,
    Col
} from 'reactstrap';

import TopSection from 'layout/TitleSection/TitleSection';

class Galerias extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleSection: 'Galerias de fotos'
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

export default Galerias;