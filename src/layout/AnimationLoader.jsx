import React from "react";
import { Route, Switch } from "react-router-dom";

class AnimationLoader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="animationload">
                <div className="loader"></div>
            </div>
        );
    }
}

export default AnimationLoader;