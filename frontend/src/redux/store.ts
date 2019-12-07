import { rootReducer } from './reducers'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
//   applyMiddleware(...middleware),
  // other store enhancers if any
));