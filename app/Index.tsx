import * as React from "react";
import * as ReactDOM from "react-dom";
import AppRouter from "./routes";
import * as InitialState from "./reducers/InitialState";
import configureStore from "./store/ConfigureStore";

const store = configureStore(InitialState.GetInitialState());

ReactDOM.render(
    <AppRouter store={store} />,
    document.getElementById("app")
);
