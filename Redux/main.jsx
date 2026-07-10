import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./Stores";
import Counting from "./Counting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Provider store={stores}>
            <Counting />
        </Provider>
    </>
);