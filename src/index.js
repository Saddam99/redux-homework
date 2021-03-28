import ReactDOM from 'react-dom';
import Add from "./Add";
import "./style.css";
import {Provider} from "react-redux";
import {createStore} from "redux";


const reducer = (state = 0, action) => {

 if (action.type === 'increase') {
     return state + 2;
 }

 if (action.type === 'reduce') {
     return state >= 3 ? state - 3 : 0;
 }

 if (action.type === 'reset') {
     return 0;
 }
    return state;
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Add />
    </Provider>,
  document.getElementById('root')
)
