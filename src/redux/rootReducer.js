import { combineReducers } from "redux";
import contactReducers from "./reducers/contactReducer";
const rootReducer = combineReducers({ contactsState: contactReducers });
export default rootReducer;
