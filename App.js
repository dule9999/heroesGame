import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'
import { NativeRouter, Route } from "react-router-native";
import StartApp from './src/containers/StartApp'
import Location from './src/containers/location/Location'
import HeroInfo from './src/containers/heroInfo/HeroInfo';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Route path="/" component={StartApp} />
          <Route exact path="/location/:id" component={Location} />
          <Route exact path="/heroInfo/:hero" component={HeroInfo} />
        </NativeRouter>
      </Provider>
    )
  }
}

export default App
