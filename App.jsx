/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,


} from 'react-native';


import Title from './components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Globalstyle from './assets/styles/globalstyle';
import UserStory from './components/userstory/Userstory';

function App() {
  const userstories = [
    {
      firstName:'Abhinay',
      id: 1,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Akaay',
      id: 2,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Ahaan',
      id: 3,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Angad',
      id: 4,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Agastya',
      id: 5,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Ajay',
      id: 6,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Ajay',
      id: 7,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Ajay',
      id: 8,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
  ];

  return (
    <SafeAreaView >
      <View style={Globalstyle.header}>
      <Title title={'Lets Explore'} />
      <TouchableOpacity style={Globalstyle.messageIcon}>
      <FontAwesomeIcon icon={faEnvelope} color={'#898DAE'} size={25} />
      <View style={Globalstyle.messagecontainer}>
      <Text style={Globalstyle.messagenum}>2</Text>

      </View>
      </TouchableOpacity>
      </View>
      <View style={Globalstyle.userStoryContainer}>
        <FlatList
         showsHorizontalScrollIndicator={false}
        horizontal={true}
         data={userstories} renderItem={({item})=> <UserStory firstName={item.firstName} profileImage={item.profileImage} />} />
      </View>
</SafeAreaView>
  );
}


export default App;
