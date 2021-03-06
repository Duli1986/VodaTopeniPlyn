import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
// import "assets/css/bootstrap.min.css";
// import "assets/scss/paper-kit.scss";
// import "assets/demo/demo.css";
// import reportWebVitals from "./reportWebVitals";
import Index from "./views/Index";


ReactDOM.render(
    <BrowserRouter basename={'/'}>
        <Switch>
            <Route path="/index" render={props => <Index {...props} />}/>
            <Redirect to="/index"/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
