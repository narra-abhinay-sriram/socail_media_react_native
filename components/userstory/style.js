import { StyleSheet } from "react-native";
import { FontFamily } from "../../assets/fonts/helper";

const storystyle =  StyleSheet.create({
    image:{
        width:65,
        height:65,
        borderRadius:50,

    },
    storyContainer:{
        marginRight:9,
    },
    firstname:{
        textAlign:'center',
        fontFamily:FontFamily('Inter_28pt',600),
        fontSize:14,
        color:'#022150',
        marginTop:6,
    },
    imageContainer:{
        borderWidth:2,
        borderColor:'#F35BAC',
        padding:3,
        borderRadius:65,
    },
});

export default storystyle;
