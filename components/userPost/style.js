import { StyleSheet } from "react-native";
import { FontFamily } from "../../assets/fonts/helper";

const Poststyle = StyleSheet.create({
    postUppercontainer:{
        flexDirection :'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    imageContainer:{
        flexDirection:'row',
    },
    nameLocContainer:{
        flexDirection:'column',
        justifyContent:'center',
        marginLeft:10,
    },
    username:{
        color:'#000',
        fontFamily:FontFamily('Inter_28pt',500),
        fontSize:16,
    },
    location:{
        color:'#79869F',
        fontFamily:FontFamily('Inter_28pt',400),
        fontSize:12,
        marginTop:5,
    },
    postImage:{
        alignItems:'center',
        marginTop:20,
    },
    postContainer:{
        marginTop:30,
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:'#EFF2F6',
    },
    postBottomContainer:{
        flexDirection:'row',
        marginLeft:10,
        marginTop:10,
    },
    postBottomSmall:{
        flexDirection:'row',
        alignItems:'center',

    },
    postBottomIcon:{
        marginLeft:3,
        color:'#79869F',
    },

});
export default Poststyle;
