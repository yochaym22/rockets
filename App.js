import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
// import {useWindowDimensions, Text} from 'react-native';
// import {Route} from './components/route/Route';
import HomeStack from './navigation/AppNavigator';
// import AppContainer from './navigation/AppNavigator';
// const FirstRoute = () => <Route color={'#ffffff'} flex={1} />;
//
// const SecondRoute = () => <Route color={'#673ab7'} flex={1} />;
const App: () => Node = () => {
  return <HomeStack />;
};
export default App;
// const App: () => Node = () => {
// const layout = useWindowDimensions();
// const [index, setIndex] = React.useState(0);
// const [routes] = React.useState([
//   {key: 'first', title: 'First'},
//   {key: 'second', title: 'Second'},
// ]);
//
// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });
//
// return (
//   <TabView
//     navigationState={{index, routes}}
//     renderScene={renderScene}
//     onIndexChange={setIndex}
//     initialLayout={{width: layout.width}}
//   />
// );
// };
//
// export default App;
