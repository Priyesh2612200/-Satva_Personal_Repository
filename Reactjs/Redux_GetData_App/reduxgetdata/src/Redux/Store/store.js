import {createStore,applyMiddleware} from "redux";
import {userReducer} from "../Reducer/userReducer";
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk";


const middleware = []
const store = createStore(userReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store