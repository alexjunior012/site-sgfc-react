import React from "react";
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import TopSection from 'layout/TitleSection/TitleSection';

class Times extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleSection: 'Times'
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

export default Times;