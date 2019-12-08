import React from 'react'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { Husky } from './components'
import { Button } from 'semantic-ui-react'

const App: React.FC = () => {
  const onPress = () => console.log('woof')
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Husky onPress={onPress} />
          <Button onClick={onPress} primary>Click Here</Button>
        </header>
      </div>
    </Provider>
  )
}

export default App
