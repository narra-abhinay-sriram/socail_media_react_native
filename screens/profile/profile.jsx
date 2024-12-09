import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Globalstyle from '../../assets/styles/globalstyle';
import { useNavigation } from '@react-navigation/native';

function Profile(){
    const navigation = useNavigation()
    return (
        <SafeAreaView style={[Globalstyle.homebackground,Globalstyle.flex]}>
            <Text style={{color:'blue'}} onPress={()=>{navigation.goBack();}}>
                Go back
            </Text>
            <Text>
                hi abhinay from profile component
            </Text>
        </SafeAreaView>
    );
}

export default Profile;
