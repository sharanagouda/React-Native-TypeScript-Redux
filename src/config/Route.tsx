import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";
import {Image} from "react-native";
import Home from "../screens/Home";
import About from "../screens/About";
import FragScreen from "../screens/FragScreen";
import Hello from "../screens/Hello";
import LoginView from "../screens/Login";
import HomeMenu from "../screens/Menu"
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
          {/* <Scene tabs  key="Home"  hideNavBar={true}  tabBarPosition="bottom" swipeEnabled={true} tabBarStyle={{height: 65, backgroundColor:'#ffffff', paddingVertical: 4}}>
            <Scene key="home" hideNavBar={true}  icon={this.renderHomeIcon} component={Home} />
            <Scene key="login" hideNavBar={true}  icon={this.renderHomeIcon} component={LoginView} />
            <Scene key="test"  hideNavBar={true}  icon={this.renderAboutIcon} component={FragScreen}  />
            <Scene key="about"  hideNavBar={true}  icon={this.renderAboutIcon} component={About}  />
      </Scene> */}
            <Scene key="menu" component={HomeMenu} title="Menu" />
            <Scene key="about" component={About} title="about" />
            <Scene key="home" component={Home} title="Home" />
            <Scene key="login" hideNavBar={true}  icon={this.renderHomeIcon} component={LoginView} />
            <Scene key="test"  hideNavBar={true}  icon={this.renderAboutIcon} component={FragScreen}  />
          </Scene>
        </Router>
      );
    }
  }
  export default Routes;