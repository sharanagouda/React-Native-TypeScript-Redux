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
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "../helper"
  import {compose} from "redux";
import {connect} from "react-redux";
import {reduxForm, Field} from "redux-form"
import InputText from "../components/TextInput";


class FragScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          numColumns:3,
          userSelected:{},
          modalVisible:false,
         
        };
      }
      renderScanInput = (field) => {
        const { meta: { touched, error }, numberOfLines, multiline, editable, labelStyle, inputStyle, placeholder, label, style, secureTextEntry, maxLength, input: { onChange, ...restInput } } = field;
        return (
            <View >
                <InputText label={label}
                    labelStyle={labelStyle}
                    numberOfLines={numberOfLines}
                    multiline={multiline}
                    inputStyle={inputStyle}
                    editable={editable}
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor="rgb(51, 51, 51)"
                    returnKeyType={this.props.returnKeyType}
                    placeholder={placeholder}
                    secureTextEntry={secureTextEntry}
                    keyboardType={this.props.keyboardType}
                    maxLength={maxLength}
                    value={this.props.value}
                    onChangeText={onChange}
                    style={style}
                    {...restInput}
                />
                <Text style={[styles.errorText, { marginLeft: "37%", position: "absolute", bottom: 0 }]}>{touched ? error : ""}</Text>
            </View>
        );
    }

      onChange(key, value) {
        this.setState({
            [key]: value
        });
    }

    render(){
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#bd23dc' }} />
              
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>uwey</Text>
               
               
                  <Field
                  name={"name"}
                  component={this.renderScanInput}/>
                   <Field
                                        name="email"
                                        editable={false}
                                        label="Email*"
                                        placeholder="mike.lee.jones@email.com"
                                       
                                        style={styles.fieldStyles}
                                        labelStyle={styles.labelStyles}
                                        inputStyle={styles.inputStyles}
                                        component={this.renderScanInput}
                                    />
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
      fieldStyles: {
        height: 60,
        // alignItems: "flex-start",
        // justifyContent:'flex-start',
        backgroundColor: 'white', 
    },
    labelStyles: {
      fontSize: 14,
      backgroundColor: '#ffffff',
      color: "rgb(51,51,51)",
      paddingTop:20,
      paddingRight:0,
      paddingLeft:20,
      // width:"30%",
      // marginLeft:20,

    },
    inputStyles: {
      fontSize: 13,
      color:'rgb(51,51,51)',
      width:'70%',
      paddingLeft:0,
      padding:0,
      backgroundColor:'#ffffff',
    },
    errorText: {
      color: 'red',
      paddingHorizontal: 16,
      position: "absolute",
      bottom: 0,
      fontSize: 12
  },
  errorTextColor:{
      color: 'red',
      paddingHorizontal: 16,
      fontSize:12
  },
}); 
const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch =>({

});

export default compose(
  connect(mapStateToProps,
    mapDispatchToProps
    ),
    reduxForm({
      form:"editform"}))(FragScreen);