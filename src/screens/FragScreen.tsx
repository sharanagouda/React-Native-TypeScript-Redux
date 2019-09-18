import React,{Component} from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList, 
    Dimensions,
    TouchableOpacity,
    Image,
    Modal,
    ScrollView,
    SafeAreaView
  } from 'react-native';
import {connect} from "react-redux";

class FragScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          numColumns:3,
          userSelected:{},
          modalVisible:false,
         
        };
      }


    render(){
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#bd23dc' }} />
              
                <View style={styles.container}>
<Text style={styles.welcome}>Welcome to React Native!</Text>
<Text style={styles.instructions}>To get started, edit App.js</Text>
<Text style={styles.instructions}>uwey</Text>
</View>
            </React.Fragment>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
}); 
const mapStateToProps = state =>({

});

export default connect(mapStateToProps)(FragScreen);