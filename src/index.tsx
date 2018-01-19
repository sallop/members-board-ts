import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
//import Hello from './components/Hello';
//import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { enthusiasm } from './reducers/index';
import rootReducer from './reducers';
import { StoreState } from './types/index';

const store = createStore<StoreState>(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
);

console.log('initial state ' + JSON.stringify(store.getState(), undefined, 2));

//const store = createStore<StoreState>(enthusiasm, {
//  enthusiasmLevel: 1,
//  languageName: 'TypeScript',
//});
//<App />,
//<Hello name="TypeScript" enthusiasmLevel={10} />,

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


