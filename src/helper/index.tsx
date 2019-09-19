import { PixelRatio,Dimensions, Alert } from "react-native";
import { Actions } from 'react-native-router-flux';

export const redirectTo = (scene) => {
    if (Actions.currentScene) Actions.reset(scene);
  };
  
  export const navigateTo = (scene, props = null) => {
    if (props) {
      Actions.push(scene, props);
    } else {
      Actions[scene].call();
    }
  };
  
  export const navigateBack = () => {
      Actions.pop()
  };

export const widthPercentageToDP = widthPercent => {
    const screenWidth = Dimensions.get('window').width;
    // Convert string input to decimal number
    const elemWidth = parseFloat(widthPercent);
    return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
  };
  export const heightPercentageToDP = heightPercent => {
    const screenHeight = Dimensions.get('window').height;
    // Convert string input to decimal number
    const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
  };