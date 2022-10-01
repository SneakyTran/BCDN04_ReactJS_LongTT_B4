import { combineReducers, createStore } from "redux";
import { seatListReducer } from "./reducers/seatListReducer";
import { seatBookingReducer } from "./reducers/seatBookingReducer";

const rootReducer = combineReducers({
    seatListReducer,
    seatBookingReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
