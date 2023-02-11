import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import cartCounter from "../middlewares/checkId";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter)));

export default store;
