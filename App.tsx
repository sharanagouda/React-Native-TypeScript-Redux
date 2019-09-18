import React, {Fragment} from 'react';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react"
import {View,Text,
  StyleSheet,Platform
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Main from "./src/Main";
import storePersist from "./src/config/Store";
const persist = storePersist();

class App extends React.Component{
  
  componentDidMount() {
    setTimeout(() => {
        if (Platform.OS !== "ios") {
            SplashScreen.hide();
        }
    }, 2000);
  }

  render(){
   
    return (
      <Provider store={persist.store}>
        <PersistGate persistor={persist.persistor}>
                 <Main/>
        </PersistGate>
      </Provider>
    
    );
  };
}


const styles = StyleSheet.create({
  
});

export default App;
