import React from 'react';
import { YellowBox, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'
import { NativeRouter, Route } from "react-router-native";
import StartApp from './src/containers/StartApp'
import Location from './src/containers/location/Location'
import HeroInfo from './src/containers/heroInfo/HeroInfo';
import Map from './src/containers/map/Map'
import HeroesSelection from './src/containers/heroesSelection/HeroesSelection';
import HeroClassSelection from './src/containers/heroesSelection/HeroClassSelection';
import HeroNameSelection from './src/containers/heroesSelection/HeroNameSelection';
import DungeonsList from './src/containers/dungeonsList/DungeonsList';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar hidden />
        <NativeRouter>
          {/* <Route path="/" component={StartApp} /> */}
          <Route path="/" component={DungeonsList} />
          <Route exact path="/heroesSelection" component={HeroesSelection} />
          <Route exact path="/heroClassSelection" component={HeroClassSelection} />
          <Route exact path="/heroNameSelection" component={HeroNameSelection} />
          <Route exact path="/dungeonsList" component={DungeonsList} />
          <Route exact path="/location/:id" component={Location} />
          <Route exact path="/heroInfo/:hero" component={HeroInfo} />
          <Route exact path="/map" component={Map} />
        </NativeRouter>
      </Provider>
    )
  }
}

export default App
