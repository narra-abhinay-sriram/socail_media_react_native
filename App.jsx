/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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
import Userpost from './components/userPost/userPost';

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
    {
      firstName:'Ajay',
      id: 9,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Ajay',
      id: 10,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Ajay',
      id: 11,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Ajay',
      id: 12,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Ajay',
      id: 13,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
    {
      firstName:'Ajay',
      id: 14,
      profileImage: require('./assets/images/github_dp.jpg'),
    },
  ];
  const userPosts = [
    {
      firstName:'ABhinay',
      lastName:'Narra',
      location:'Hyd, India',
      likes:1302,
      comments:22,
      bookMarks:11,
      Image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/github_dp.jpg'),


      id:1,
    },
    {
      firstName:'Akaay',
      lastName:'Kohli',
      location:'london, UK',
      likes:102,
      comments:12,
      bookMarks:1,
      Image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/github_dp.jpg'),


      id:2,
    },
    {
      firstName:'Ahaan',
      lastName:'sharma',
      location:'Mumbai, Maharashtra',
      likes:1102,
      comments:222,
      bookMarks:151,
      Image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/github_dp.jpg'),
      id:3,
    },
    {
      firstName:'Angad',
      lastName:'Bumrah',
      location:'Punjab, India',
      likes:702,
      comments:54,
      bookMarks:19,
      Image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/github_dp.jpg'),
      id:4,
    },
    {
      firstName:'Agastya',
      lastName:'pandya',
      location:'Baroda, India',
      likes:102,
      comments:2,
      bookMarks:1,
      Image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/github_dp.jpg'),
      id:5,
    },
    {
      firstName:'ABhinay',
      lastName:'Narra',
      location:'Hyd, India',
      likes:1302,
      comments:22,
      bookMarks:11,
      Image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/github_dp.jpg'),
      id:6,
    },
    {
      firstName:'ABhinay',
      lastName:'Narra',
      location:'Hyd, India',
      likes:1302,
      comments:22,
      bookMarks:11,
      Image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/github_dp.jpg'),
      id:7,
    },
    {
      firstName:'ABhinay',
      lastName:'Narra',
      location:'Hyd, India',
      likes:1302,
      comments:22,
      bookMarks:11,
      Image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/github_dp.jpg'),
      id:8,
    },
    {
      firstName:'ABhinay',
      lastName:'Narra',
      location:'Hyd, India',
      likes:1302,
      comments:22,
      bookMarks:11,
      Image: require('./assets/images/default_post.png'),
      profileImage: require('./assets/images/github_dp.jpg'),
      id:9,
    },
  ];
  const pageindex = 4;
  const [userCurrentpage,setuserCurrentpage] = useState(1);
  const [userRenderredstory,setRenderedstory] = useState([]);
  const [isloadingStory,setisloadingStory] = useState(false);
  const pagePostindex = 2;
  const [userPostCurrentpage,setuserPostCurrentpage] = useState(1);
  const [userRenderredPost,setRenderedPost] = useState([]);
  const [isloadingPost,setisloadingPost] = useState(false);

  const pagination = (database,currentpage,pagesize)=>{
    const startindex = (currentpage - 1) * pagesize;
    const endindex = startindex + pagesize;
    if(startindex >= database.length)
    {
      return [];
    }
    return database.slice(startindex,endindex);
  };

  useEffect(()=>{
    setisloadingStory(true);
 const getinitialData = pagination(userstories,1,pageindex);
 setRenderedstory(getinitialData);
    setisloadingStory(false);
    setisloadingPost(true);
 const getinitialPost = pagination(userPosts,1,pagePostindex);
 setRenderedPost(getinitialPost);
    setisloadingPost(false);
  },[]);

  return (
    <SafeAreaView >

      <View>

        <FlatList
        ListHeaderComponent={
        <>
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
        onEndReachedThreshold={0.5}
        onEndReached={()=>{
          if(isloadingStory)
          {
            return;
          }
          setisloadingStory(true);
          const contentToAppend = pagination(userstories,userCurrentpage + 1,pageindex);
          if(contentToAppend.length > 0)
          {
            setuserCurrentpage(userCurrentpage + 1);
            setRenderedstory((prev)=>[...prev,...contentToAppend]);
          }
          setisloadingStory(false);
        }}
         showsHorizontalScrollIndicator={false}
        horizontal={true}
         data={userRenderredstory} renderItem={({item})=> <UserStory key={item.id} firstName={item.firstName} profileImage={item.profileImage} />} />
      </View>
      </>
      }
      onEndReachedThreshold={0.5}
      onEndReached={()=>{
        if(isloadingPost)
        {return;}
        setisloadingPost(true);
        const AppendingPost = pagination(userPosts,userPostCurrentpage + 1,pagePostindex);
        if(AppendingPost.length >= 0)
        {
          setuserPostCurrentpage(userPostCurrentpage + 1);
          setRenderedPost((prev)=>[...prev,...userRenderredPost]);
        }
        setisloadingPost(false);

      }}
        data={userRenderredPost}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>
        <View style={Globalstyle.userPostcontainer}>
          <Userpost
          key={item.id}
          firstName={item.firstName}
           lastName={item.lastName}
           location={item.location}
           likes={item.likes}
           comments={item.comments}
           bookmarks={item.bookMarks}
           image={item.Image}
           profileImage={item.profileImage} />
           </View>} />
      </View>
</SafeAreaView>
  );
}


export default App;
