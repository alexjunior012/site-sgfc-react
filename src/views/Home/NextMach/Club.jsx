import React from "react";

class Club extends React.Component {
    render() {
        const { props } = this;

        return (
            <div className="club">
                <img
                    src={props.logo}
                    className="img-fluid"
                    alt=""
                />
                <p className="club-name">{props.name}</p>
            </div>
        );
    }
}

export default Club;