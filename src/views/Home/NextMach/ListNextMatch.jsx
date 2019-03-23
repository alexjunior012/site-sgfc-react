import React from "react";

class ListNextMatch extends React.Component {
    render() {
        const { info } = this.props;

        return (
            <div className="list-matchs">
                <div className="clubs-logo">
                    <img src={info.mandante.logo} alt="" />
                    <img src={info.visitante.logo} alt="" />
                </div>
                <div className="clubs-name">
                    <p>
                        {info.mandante.name} <br/>
                        {info.visitante.name}
                    </p>
                </div>
                <div className="info">
                    <div className="info-match">
                        <p className="match-type">{info.info.type}</p>
                        <p className="match-date">{info.info.date}</p>
                        <p className="match-hour">{info.info.hour}</p>
                        <p className="match-location">{info.info.local}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListNextMatch;