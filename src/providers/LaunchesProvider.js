import React, {useEffect, useState} from 'react';
import {LaunchesReducer} from '../reducers/launchesReducer';
import * as actions from '../actions/actionTypes';

const LaunchesContext = React.createContext();

function LaunchesProvider({children}) {
  const [state, dispatch] = React.useReducer(LaunchesReducer);
  const value = {
    error: state.error,
    isLoaded: state.isLoaded,
    launches: state.launches,
    navigation: state.navigation,
  };

  useEffect(() => {
    fetch('https://lldev.thespacedevs.com/2.2.0/launch/?format=json')
      .then(res => res.json())
      .then(
        result => {
          setLaunchState({
            isLoaded: true,
            items: result.results,
          });
        },
        error => {
          setLaunchState({
            ...launchState,
            isLoaded: true,
            error,
          });
        },
      );
  }, [launchState, launchState.error]);
  return (
    <LaunchesContext.Provider value={value}>
      {children}
    </LaunchesContext.Provider>
  );
}
module.exports = {AppProvider: LaunchesProvider, LaunchesContext};
