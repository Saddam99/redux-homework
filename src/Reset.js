import React from 'react';
import {useDispatch} from "react-redux";

function Reset() {

    const dispatch = useDispatch();
    function reset() {
        dispatch({
            type: 'reset'
        })

    }
    return (
        <div className="reset buttonform" onClick={reset}>
            Сбросить
        </div>
    );
}

export default Reset;