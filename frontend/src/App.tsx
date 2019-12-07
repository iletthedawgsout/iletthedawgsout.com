import React from 'react';
import { store } from "./redux/store";
import { Provider } from 'react-redux'
import './App.css';
import { Husky } from "./components";

const App: React.FC = () => {
  const onPress = () => console.log('woof');
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Husky onPress={onPress} />>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            GO DAWGS
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
