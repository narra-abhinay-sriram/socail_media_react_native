import { StyleSheet } from 'react-native';
import { FontFamily } from '../fonts/helper';

const Globalstyle = StyleSheet.create({
    header:{
        marginLeft: 20,
        marginRight: 17,
        marginTop: 30,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    messageIcon:{
        padding:12, backgroundColor:'#F9FAFB', borderRadius:10,
    },

    messagecontainer:{
backgroundColor:'#F35BAC',
alignItems:'center',
flexDirection:'row',
justifyContent:'center',
borderRadius:10,
height:10,
width:10,
position:'absolute',
right:10,
top:12,

    },
    messagenum:{
color:'#FFFFFF',
fontSize:6,
fontFamily:FontFamily('Inter_28pt',600),
    },
    userStoryContainer:{
        marginTop:20,
        marginHorizontal:28,
    },
});
export default Globalstyle;
