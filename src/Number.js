import React from 'react';
import {useSelector} from "react-redux";

function Number() {
    const number = useSelector(state => state)
    return (
        <div className="number">
            {number}
        </div>
    );
}

export default Number;