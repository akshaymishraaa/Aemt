import { createStore } from "redux";
import { addItem } from "./reducer/Reducer";
const store = createStore(addItem);

export default store;