import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Home } from './components/Home';
import { configureStore } from "../redux/configureStore";
import { Secondary } from "./components/Secondary";
const store =  configureStore();

ReactDOM.render(
  <Provider store={store} key="provider">
    <div>Great</div>
    <Home name="Gautham" time={new Date().getTime()} />
    <Secondary rating />
  </Provider>,
  document.getElementById('app'),
);