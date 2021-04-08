import React from 'react';
import HomeStack from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './src/store/store';
import {GET_LAUNCHES} from './src/actions/actionTypes';
import {callApi} from './src/store/middleware';
import thunk from 'redux-thunk';
const apiUrl = 'https://lldev.thespacedevs.com/2.2.0/launch/?format=json';
const store = createStore(rootReducer, applyMiddleware(callApi));
store.dispatch({type: GET_LAUNCHES, apiUrl: apiUrl});

const App = () => {
  return (
    <Provider store={store}>
      <HomeStack />
    </Provider>
  );
};
export default App;
