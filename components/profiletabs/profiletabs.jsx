import { Text, View } from "react-native";
import React from "react";
import style from "./style";

function Profiletabs({ title, isfocused }) {
  return (
    <View style={{ padding: 8 }}>
      <Text style={[style.Title, !isfocused && style.titlenotfocus]}>
        {title}
      </Text>
    </View>
  );
}

export default Profiletabs;
