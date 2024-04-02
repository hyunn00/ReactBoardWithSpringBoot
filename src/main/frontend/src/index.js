import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./module";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {thunk} from "redux-thunk";
import {BrowserRouter} from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </Provider>
);

reportWebVitals();
