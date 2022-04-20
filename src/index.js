import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRoutes from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "react-notifications/lib/notifications.css";
import "mdbreact/dist/css/mdb.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { NotificationContainer } from "react-notifications";
// import { socket, SocketContext } from "./context/socket";
import rootReducer from "../src/redux/reducer/index";
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SocketContext.Provider value={socket}> */}
        <Provider store={store}>
          <AppRoutes />
          <NotificationContainer />
        </Provider>
      {/* </SocketContext.Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
