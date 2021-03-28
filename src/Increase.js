import React from 'react';
import {useDispatch} from "react-redux";

function Increase(props) {
    const dispatch = useDispatch();

    function increase() {
        dispatch({
            type: "increase"
        })

    }
    return (
        <div className="increase buttonform" onClick={increase}>
            Увеличить
        </div>
    );
}

export default Increase;