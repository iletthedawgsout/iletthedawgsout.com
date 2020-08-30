import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About, BlackLivesMatter, Blog } from "./pages";
import { Provider } from 'react-redux'
import { store } from "./redux/createStore";

const Header = () => (
  <div>
    <h1>I let the dawgs out</h1>
  </div>
);

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/blm">BLM</Link>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
    </ul>
  </nav>
);

const Content = () => (
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/blm">
      <BlackLivesMatter />
    </Route>
    <Route path="/">
      <Blog />
    </Route>
  </Switch>
);

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <NavBar />
          <Content />
        </div>
      </Router>
    </Provider>
  );
}


