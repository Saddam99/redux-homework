import React from 'react';
import {useDispatch} from "react-redux";

function Reduce( ) {
    const dispatch = useDispatch();

    function reduce() {
        dispatch({
            type: 'reduce'
        })
    }
    return (
        <div className="reduce" onClick={reduce}>
            Уменьшить
        </div>
    );
}

export default Reduce;