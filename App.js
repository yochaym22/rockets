import React from 'react';
import HomeStack from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './src/store/store';
import {GET_LAUNCHES} from './src/actions/actionTypes';
import {callApi} from './src/store/middleware';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(callApi, thunk));
store.dispatch({type: GET_LAUNCHES});

const App = () => {
  return (
    <Provider store={store}>
      <HomeStack />
    </Provider>
  );
};
export default App;
