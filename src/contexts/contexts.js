import React from 'react';

const LaunchesContext = React.createContext({
  error: false,
  isLoaded: false,
  launches: [],
  navigation: undefined,
});
const FavContext = React.createContext();

module.exports = {LaunchesContext, FavContext};
