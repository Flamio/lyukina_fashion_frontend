import React from 'react';
import {render} from "react-dom";
import {Provider} from "react-redux";
import Main from "./Main";
import {Store} from "./Store";
import {configureFakeBackend} from "./fake-backend/FakeBackend";

configureFakeBackend()

render(
    <Provider store={Store}>
      <Main/>
    </Provider>,
    document.getElementById("root")
)
