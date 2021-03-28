import React from 'react';
import Increase from "./Increase";
import Reduce from "./Reduce";
import Reset from "./Reset";

function Buttons() {
    return(
        <div className="buttons">
            <Increase />
            <Reduce />
            <Reset />
        </div>
    );
}
export default Buttons;