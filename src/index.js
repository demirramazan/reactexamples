import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import LiftingStateUp from './LiftingStateUp';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import  {reducer} from './reducer'
import thunk from 'redux-thunk'
import ReactReduxThunk from './ReactReduxThunk'

const store = createStore(reducer,applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ReactReduxThunk/>
      </Provider>
    {/*<LiftingStateUp/>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

