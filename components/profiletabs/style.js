import { StyleSheet } from "react-native";
import { FontFamily } from "../../assets/fonts/helper";
import { fontScale, hrizontalScale } from "../../assets/styles/scaling";

const style = StyleSheet.create({
  Title: {
    color: "#022150",
    fontFamily: FontFamily("Inter_28pt", 600),
    fontSize: fontScale(16),
    paddingHorizontal: hrizontalScale(10),
    paddingVertical: hrizontalScale(5),
  },
  titlenotfocus: {
    color: "#79869F",
    fontFamily: FontFamily("Inter_28pt", 300),
  },
});

export default style;
