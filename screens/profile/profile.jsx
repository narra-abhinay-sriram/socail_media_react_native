import React from "react";
import { Image, Text, View, ScrollView, SafeAreaView } from "react-native";
import Globalstyle from "../../assets/styles/globalstyle";
import style from "./style";
import { Profiletabscontainer } from "../../navigation/Mainnavigation";

function Profile() {
  return (
    <SafeAreaView style={[Globalstyle.homebackground, Globalstyle.flex]}>
      <ScrollView>
        <View style={style.imagecontainer}>
          <View style={style.imagecontent}>
            <Image
              source={require("../../assets/images/github_dp.jpg")}
              style={style.image}
            />
          </View>
        </View>
        <View>
          <Text style={style.username}>Abhinay_narra</Text>
        </View>
        <View style={style.statisticsContainer}>
          <View>
            <Text style={style.statisticswords}>45</Text>
            <Text style={style.statisticswlabel}>Following</Text>
          </View>
          <View>
            <Text style={style.statisticswords}>45M</Text>
            <Text style={style.statisticswlabel}>Followers</Text>
          </View>
          <View>
            <Text style={style.statisticswords}>450</Text>
            <Text style={style.statisticswlabel}>Posts</Text>
          </View>
        </View>
        
      </ScrollView>
      <View style={{flex:1,marginTop:-450}}>
      <Profiletabscontainer />

      </View>
    </SafeAreaView>
  );
}

export default Profile;
