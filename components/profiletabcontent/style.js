import { StyleSheet } from "react-native";
import { hrizontalScale, verticalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({

    imagecontainer:{
        backgroundColor:'#FFFFFF',
        padding:hrizontalScale(20),
        flexDirection:'row',
        flexWrap:'wrap',
    },
    image:{
        width:hrizontalScale(130),
        height:verticalScale(125),
        margin:hrizontalScale(12),

    },
    container:{
        backgroundColor:'#FFFFFF',
    },

});
export default style;
