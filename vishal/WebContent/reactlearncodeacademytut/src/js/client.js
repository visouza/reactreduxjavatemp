import React from "react";
import ReactDom from "react-dom";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import {Router, Route, IndexRoute, hashHistory} from "react-router"
import Bootstrap from "./vendor/bootstrap-without-jquery"

const app = document.getElementById('app');
//ReactDom.render(<Layout/>,app);
ReactDom.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives" component={Archives}></Route>
      <Route path="settings" component={Settings}></Route>
      <Route path="featured" component={Featured}></Route>
    </Route>
  </Router>
  ,app
);
