import React from "react";
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import TopSection from 'layout/TitleSection/TitleSection';

class Sobre extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleSection: 'Sobre'
        }
    }

    render() {
        return (
            <>
                <TopSection titleSection={this.state.titleSection} />

                {/*SEÇÕES PARA DESENVOLVER*/}

                {/*Sobre o clube*/}
                {/*Historia do clube*/}
                {/*Diretoria*/}
                {/*Parceiros*/}
            </>
        );
    }
}

export default Sobre;