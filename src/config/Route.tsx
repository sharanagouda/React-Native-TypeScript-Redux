import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";
import {Image} from "react-native";
import Home from "../screens/Home";
import About from "../screens/About";
import FragScreen from "../screens/FragScreen";
import Hello from "../screens/Hello";
class Routes extends Component {

  renderHomeIcon({focused})  {
    let image = focused ? require('../assets/homeF.png') : require('../assets/home.png');
    return ( <Image source={image} style={{height:50,width:50}} /> );
}

renderAboutIcon({focused})  {
    let image = focused ? require('../assets/edit-userF.png') : require('../assets/edit-user.png');
    return ( <Image source={image} style={{height:50,width:50}} /> );
}

    render() {
      return (
        <Router>
          <Scene key="user">
          <Scene tabs  key="Home"  hideNavBar={true}  tabBarPosition="bottom" swipeEnabled={true} tabBarStyle={{height: 65, backgroundColor:'#ffffff', paddingVertical: 4}}>
            <Scene key="Home" hideNavBar={true}  icon={this.renderHomeIcon} component={Home} />
            <Scene key="Hello" hideNavBar={true}  icon={this.renderHomeIcon} component={Hello} />
            <Scene key="Test"  hideNavBar={true}  icon={this.renderAboutIcon} component={FragScreen}  />
            <Scene key="About"  hideNavBar={true}  icon={this.renderAboutIcon} component={About}  />
      </Scene>
            <Scene key="about" component={About} title="about" />
            <Scene key="home" component={Home} title="Home" />
          </Scene>
        </Router>
      );
    }
  }
  export default Routes;