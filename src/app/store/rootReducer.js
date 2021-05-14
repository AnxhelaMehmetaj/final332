import {combineReducers} from "redux";
import Reducer from "../features/events/Reducer";

const rootReducer = combineReducers({
    event:Reducer
})
export default rootReducer();