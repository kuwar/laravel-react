import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import Users from "./components/Users.jsx";
import Articles from "./components/Articles.jsx";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="users" component={Users}></Route>
            <Route path="articles" component={Articles}></Route>
        </Route>
    </Router>,
    app);