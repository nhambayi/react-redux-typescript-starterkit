import {
  createStore,
  applyMiddleware
} from "redux";
import thunk from "redux-thunk";

import { IState } from "../reducers/InitialState";
import rootReducer from "../reducers";

export default function configureStore(initialState: IState): any {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
			);

  return store;
}
