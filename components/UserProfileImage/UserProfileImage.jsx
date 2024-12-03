import React from 'react';
import { Image, View } from 'react-native';
import Profile from './style';
import PropTypes from 'prop-types';

const UserProfileImage = (props)=> {
  return (
    <View style={[Profile.imageContainer,{borderRadius:props.imageDimensions}]}>
            <Image source={props.userImage} style={{height:props.imageDimensions,width:props.imageDimensions,borderRadius:props.imageDimensions}} />

            </View>
  );
};
export default UserProfileImage;

UserProfileImage.propTypes = {
    imageDimensions:PropTypes.number.isRequired,
};
