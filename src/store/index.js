import { createStore } from "redux";
import denominationReducer from "./reducers/denominationReducer";

const store = createStore(denominationReducer);

export default store;
