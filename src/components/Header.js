import React from 'react';

import Stats from './stats';
import Stopwatch from "./Stopwatch";

const Header = props => {

    return(
        <div className={"header"}>
            <Stats players={props.players} />
            <h1>ScoreBoard</h1>
            <Stopwatch />
        </div>
    )
}

export default Header;