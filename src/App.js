import Header from "./components/layout/Header/Header.js";
import Footer from "./components/layout/Footer/Footer.js";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import WebFont from "webfontloader";
import Home from "./components/Home/Home.js";
import ProductDetails from "./components/Product/ProductDetails.js";
import Products from "./components/Product/Products.js";
import Search from "./components/Product/Search.js";
import LoginSignUp from "./components/User/LoginSignUp.js";
import store from "./store"
import { loadUser } from "./actions/userAction.js";
import UserOptions from "./components/layout/Header/UserOptions.js"
import { useSelector } from "react-redux";

function App() {

  const {isAuthenticated, user} = useSelector(state=>state.user)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

  }, []);
  return (
    <Router>
      <Header />
        {isAuthenticated && <UserOptions user={user} />}
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/product/:id" component={ProductDetails} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/:keyword" component={Products} />

      <Route exact path="/Search" component={Search} />

      <Route exact path="/login" component={LoginSignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
