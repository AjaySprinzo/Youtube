import {
    View,
    Text,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
const cards = ({ videoId, title, description, imageUrl, videoUrl }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('VideoPlayer', { videoUrl, title, description })} style={{flex:1}}>
            <View style={{ marginBottom: 10 }}>
                <Image source={{ uri: imageUrl }} style={{ width: RFValue(400), height: RFValue(222) }} />
                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={{ height: RFValue(40), width: RFValue(40), margin: 5 }}
                    />
                    <View style={{ marginLeft: 5, flex: 1 , width:"auto" }}>
                        <Text
                            style={{ fontSize: 20, width: Dimensions.get('screen').width - 50, fontWeight: 'bold', color: "#000", }}
                            numberOfLines={2}
                            ellipsizeMode='tail'>
                            {title}
                        </Text>
                        <Text style={{ fontSize: 18, width: Dimensions.get('screen').width - 50, color: '#000' }}

                            numberOfLines={2}
                            ellipsizeMode='tail'
                        >
                            {description}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
export default cards;