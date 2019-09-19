

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image,StyleSheet } from 'react-native';

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    value: "",
    placeholder: "",
    maxLength: 200,
    keyboardType: "default",
    secureTextEntry: false,
    returnKeyType: "next",
    label: "Label",
    style: {},
    isPassword: false,
    onIconPress: () => {}
}
/**
* Represents ExpandCollapseView.
* @class ExpandCollapseView
* @extends Component
*/
class InputText extends Component {

    constructor(props) {
        super(props);
        this.mapElement = this.mapElement.bind(this);
    }

    mapElement(node) {
        this.props.mapElement(node);
    }

    /**
    * @function render
    * React render method for rendering the native elements
    */

    render() {
        return (
            <View style={[styles.textInputContainer, this.props.style]}>
                <Text style={styles.textInputLabel}>{this.props.label}</Text>
                <TextInput
                    style={styles.textInputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholderTextColor="rgba(51, 51, 51, 0.6)"
                    selectionColor= "rgb(51, 51, 51)"
                    
                    returnKeyType={this.props.returnKeyType}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    keyboardType= {this.props.keyboardType}
                    maxLength= {this.props.maxLength}
                    value= {this.props.value}
                    autoCapitalize= {this.props.autoCapitalize}
                    onChangeText= {this.props.onChangeText} />
                {/* {this.props.isPassword &&
                  <View style={styles.passwordEyeIconCont}>
                  <TouchableOpacity onPress={this.props.onIconPress}>
                  <Image source={this.props.secureTextEntry ? require('../../assets/images/signup/hide.png') : require('../../assets/images/signup/view.png')} style={{width:22,height:16.6}}/>
                   </TouchableOpacity>
                </View>

                } */}
            </View>
        );
    }
}

InputText.defaultProps = defaultProps;

export default InputText;

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 16,
        marginVertical: 8
    },
    textInputContainer: {
        // height:60,
        // flexDirection:'row',
        paddingHorizontal: 16,
        marginTop: 11
    },
    textInputLabelscan: {
        color: "black",
        fontSize: 14,
        width: '40%',
    },
    passwordEyeIconCont: {
        position: "absolute",
        bottom: 6,
        right: 27,
        zIndex: 1
    },
    textInputBox: {
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: "rgb(204, 204, 204)",
        paddingBottom: 7,
        // paddingTop: 12,
        fontSize: 16,
        color: "#333",
        opacity: 40,
    },
})
