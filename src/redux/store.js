import rootReducer from "./reducer";
import { createStore } from "redux";
import products from "../products.json";

const store = createStore(rootReducer, products);
// Testing to see if store gets loaded properly
// console.log(store.getState());
export default store;
