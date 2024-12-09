import { StyleSheet } from 'react-native';
import { FontFamily } from '../../assets/fonts/helper';
import { hrizontalScale,verticalScale,fontScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
    header:{
        marginLeft: hrizontalScale(20),
        marginRight: hrizontalScale(17),
        marginTop: verticalScale(30),
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    messageIcon:{
        padding:hrizontalScale(12), backgroundColor:'#F9FAFB', borderRadius:hrizontalScale(10),
    },

    messagecontainer:{
backgroundColor:'#F35BAC',
alignItems:'center',
flexDirection:'row',
justifyContent:'center',
borderRadius:hrizontalScale(10),
height:hrizontalScale(10),
width:hrizontalScale(10),
position:'absolute',
right:hrizontalScale(10),
top:verticalScale(12),

    },
    messagenum:{
color:'#FFFFFF',
fontSize:6,
fontFamily:FontFamily('Inter_28pt',600),
    },

    userStoryContainer:{
        marginTop:verticalScale(20),
        marginHorizontal:hrizontalScale(28),
    },

    userPostcontainer:{
        marginHorizontal:hrizontalScale(24),
    },
});
export default style;
