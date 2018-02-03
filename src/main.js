import React from 'react';
import { render } from 'react-dom';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import counterApp from './reducers';
import { BrowserRouter } from 'react-router-dom';
import {counterMiddleware} from './actions';


const store = createStore(
		counterApp,
		applyMiddleware(counterMiddleware)
);


render(
  <Provider store={store}>
	  <BrowserRouter>
    	<App />
      </BrowserRouter>

  </Provider>,
  document.getElementById('root')
)
