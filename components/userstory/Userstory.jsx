import React from "react";
import PropTypes from "prop-types";
import {  Image, Text, View } from "react-native";
import storystyle from "./style";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
const UserStory = (props)=>{
    return (
        <View style={storystyle.storyContainer}>
            <UserProfileImage userImage={props.profileImage} imageDimensions={65} />
            <Text  style={storystyle.firstname}>{props.firstName}</Text>
        </View>
    );
};
export default UserStory;
UserStory.propTypes = {
    firstName:PropTypes.string.isRequired,

};
