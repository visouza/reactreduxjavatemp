import React from "react";
import ReactDom from "react-dom";

import Layout from "./pages/Layout";
import {Router, Route, IndexRoute, hashHistory} from "react-router"
import Bootstrap from "./vendor/bootstrap-without-jquery"

const app = document.getElementById('app');
//ReactDom.render(<Layout/>,app);
ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
    </Route>
  </Router>
  ,app
);
