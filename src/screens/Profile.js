import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const Profile = () => {
    const navigation = useNavigation();
    const user = {
        name: 'ABC',
        bio: 'asdf asdf asdf asff aasdf asdfg ',
        profilePicture: require('../assets/images/profile.png'),
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <TouchableOpacity onPress={() => navigation.goBack()}
                style={{
                    position: 'absolute',
                    top: 15,
                    width: '100%',
                    justifyContent: 'flex-start', 
                    left:RFValue(10)
                }}>
                <Image
                    source={require('../assets/images/backButton.png')}
                    style={{ height: 30, width: 30 }}
                />
            </TouchableOpacity>
            <Image source={user.profilePicture}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                    marginBottom: 20,
                }} />
            <Text style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginBottom: 10,
            }}>{user.name}</Text>
            <Text style={{
                fontSize: 16,
                textAlign: 'center',
                paddingHorizontal: 20,
            }}>{user.bio}</Text>
        </View>
    );
};


export default Profile;
