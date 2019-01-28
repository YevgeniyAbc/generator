import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';

//create store
const store = configureStore()

//render function
const renderApp = () =>
  render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root')
  )

//hot reloading 
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App.jsx', renderApp)
}

renderApp();

serviceWorker.unregister();
