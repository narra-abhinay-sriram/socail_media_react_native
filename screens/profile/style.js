import { StyleSheet } from "react-native";
import { fontScale, hrizontalScale, verticalScale } from "../../assets/styles/scaling";
import { FontFamily } from "../../assets/fonts/helper";

const style = StyleSheet.create({
    image:{
        width:hrizontalScale(80),
        height:hrizontalScale(80),
        borderRadius:hrizontalScale(50),

    },
    imagecontainer:{
         flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:verticalScale(60),
    },
    imagecontent:{
        padding:hrizontalScale(3),
        borderWidth:2,
        borderRadius:hrizontalScale(50),
        borderColor:'#0510EC',
    },
    username:{
        textAlign:'center',
        marginTop:hrizontalScale(10),
        fontFamily:FontFamily('Inter_28pt',600),
        fontSize:fontScale(25),
        color:'#022150',

    },
    statisticswords:{
        fontFamily:FontFamily('Inter_28pt',600),
        fontSize:fontScale(20),
        color:'#022150',
        textAlign:'center',
    },
    statisticswlabel:{
        fontFamily:FontFamily('Inter_28pt',400),
        fontSize:fontScale(16),
        color:'#79869F',
        textAlign:'center',

    },
    statisticsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:hrizontalScale(30),
        marginHorizontal:hrizontalScale(30),
        borderBottomWidth:1,
        borderBottomColor:'#E9EFF1',
        marginBottom:10,
    },
});
 export default style;
