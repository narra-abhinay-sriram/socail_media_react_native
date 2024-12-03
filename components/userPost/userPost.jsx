import React from "react";
import PropTypes from "prop-types";
import { Image, Text, View } from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons/faEllipsis";
import Poststyle from "./style";
import { faBookmark, faHeart, faMessage } from "@fortawesome/free-regular-svg-icons";
const Userpost = (props)=>{
    return (
        <View style={Poststyle.postContainer} >
            <View style={ Poststyle.postUppercontainer }>
            <View style={Poststyle.imageContainer}>

               <UserProfileImage userImage={props.profileImage} imageDimensions={48}/>
               <View style={Poststyle.nameLocContainer}>
               <Text style={Poststyle.username}>{props.firstName} {props.lastName}</Text>
               <Text style={Poststyle.location}>{props.location}</Text>
               </View>

              </View>
              <FontAwesomeIcon icon={faEllipsis} color={'#79869F'} size={20} />
            </View>
            <View>
                <Image source={props.image} />
            </View>
            <View style={Poststyle.postBottomContainer}>
                <View style={Poststyle.postBottomSmall}>
                    <FontAwesomeIcon icon={faHeart} color={'#79869F'}/>
                    <Text style={Poststyle.postBottomIcon}>{props.likes}</Text>
                </View>
                <View style={[Poststyle.postBottomSmall,{marginLeft:27}]}>
                    <FontAwesomeIcon icon={faMessage} color={'#79869F'}/>
                    <Text style={Poststyle.postBottomIcon}>{props.comments}</Text>
                </View>
                <View style={[Poststyle.postBottomSmall,{marginLeft:167}]}>
                    <FontAwesomeIcon icon={faBookmark} color={'#79869F'}/>
                    <Text style={Poststyle.postBottomIcon}>{props.bookmarks}</Text>
                </View>
            </View>
        </View>
    );
};
Userpost.propTypes = {
    firstName:PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    likes:PropTypes.number.isRequired,
    comments:PropTypes.number.isRequired,
    bookmarks:PropTypes.number.isRequired,
};

export default Userpost;
