import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const {height,width} = Dimensions.get("window");

const isSmall = width <= 355 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = ()=>{
    if(isSmall)
        {
            return 300;
        }
return 350;
};

const hrizontalScale = (size)=>(width / guidelineBaseWidth()) * size;

const guidelinebaseHeight = ()=>{
    if(isSmall)
    {
        return 550;
    } else if( width > 410)
    {
        return 660;
    }
    return 680;
};

const verticalScale = (size)=>(height / guidelinebaseHeight() ) * size;

const guidelineFont = ()=>{
    if(width > 410)
    {
        return 430;
    }
    return 400;
};

const fontScale = (size)=> Math.round(width / guidelineFont()) * size;
export {fontScale,hrizontalScale,verticalScale}
