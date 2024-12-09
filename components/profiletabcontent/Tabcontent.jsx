import React from "react";
import { Text, ScrollView, View, Image } from "react-native";
import style from "./style";

export const ProfileTabContent = ({ route }) => {
  const { name } = route;

  return (
    <ScrollView style={style.container}>
     <View style={style.imagecontainer}>
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />
        <Image  source={require('../../assets/images/github_dp.jpg')} style={style.image} />

     </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
