import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
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

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
      </div>
    </Router>
  );
}

function Blog() {
  return <h2>Blogs</h2>;
}

function BlackLivesMatter() {
  return <h2>Black lives matter</h2>;
}

function About() {
  return <h2>About me</h2>;
}
