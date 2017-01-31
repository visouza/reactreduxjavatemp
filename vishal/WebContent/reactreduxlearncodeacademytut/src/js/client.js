import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import {Router, Route, IndexRoute, hashHistory} from "react-router"
import Bootstrap from "./vendor/bootstrap-without-jquery"
import store from "./store/StoreRedux"

const app = document.getElementById('app');
//ReactDom.render(<Layout/>,app);
/*
ReactDom.render(
<Provider store= {store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives" component={Archives}></Route>
      <Route path="settings" component={Settings}></Route>
      <Route path="featured" component={Featured}></Route>
    </Route>
  </Router>
  </Provider>
  ,app
);
*/
ReactDom.render(
  <Provider store= {store}>
  <Featured />
  </Provider>
  ,app
);
