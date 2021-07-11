import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header_Footer/Header";
import Footer from "./components/Header_Footer/Footer";
import Home from "./components/Home/index";
import SignIn from "./components/Signin/index";

function Routes(props) {
  console.log(props);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/sign_in" component={SignIn} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
