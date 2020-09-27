import React, { useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { About, BlackLivesMatter, Blog } from './pages';
import { GlobalStateContextProvider } from './global-state/GlobalStateContext';
import { ContentContainer, Header, NavBar, RootContainer } from './navigation';
import { fetchTestMessage } from './services/blog-posts';

const Content = () => (
    <div style={{ flex: 9 }}>
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
);

export default function App(): JSX.Element {


    useEffect(() => {
        fetchTestMessage()
            .then(console.log)
            .catch(console.warn);
    });

    return (
        <GlobalStateContextProvider>
            <Router>
                <RootContainer>
                    <Header />
                    <ContentContainer>
                        <NavBar />
                        <Content />
                    </ContentContainer>
                </RootContainer>
            </Router>
        </GlobalStateContextProvider>
    );
}
