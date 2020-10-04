import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { About, BlackLivesMatter, Blog, Admin } from './pages';
import { GlobalStateContextProvider } from './global-state/GlobalStateContext';
import { ContentContainer, Header, NavBar, RootContainer } from './navigation';

const Content = () => (
    <div style={{ flex: 9 }}>
        <Switch>
            <Route exact path="/about">
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
);

const Home = () => (
    <>
        <Header />
        <ContentContainer>
            <NavBar />
            <Content />
        </ContentContainer>
    </>
);

export default function App(): JSX.Element {
    return (
        <GlobalStateContextProvider>
            <Router>
                <RootContainer>
                    <Switch>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </RootContainer>
            </Router>
        </GlobalStateContextProvider>
    );
}
