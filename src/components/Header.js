import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
        const navigation = useNavigation();
        return (
                <View style={{ height: RFValue(70), justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '95%', height: RFValue(40), alignSelf: 'center', justifyContent: 'space-between' }}>
                                <Image source={require('../assets/images/youtube.png')}
                                        style={{
                                                width: RFValue(92), height: RFValue(20)
                                        }}
                                />
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', justifyContent: "space-around" }}>
                                        <Image source={require('../assets/images/connectDevice.png')}
                                                style={{ width: RFValue(35), height: RFValue(35) }}
                                        />
                                        <Image source={require('../assets/images/bell.png')}
                                                style={{ width: RFValue(30), height: RFValue(30) }}
                                        />
                                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                                                <Image source={require('../assets/images/search.png')}
                                                        style={{ width: RFValue(23), height: RFValue(23) }}
                                                />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                                <Image source={require('../assets/images/profile.png')}
                                                        style={{ width: RFValue(32), height: RFValue(32) }}
                                                />
                                        </TouchableOpacity>
                                </View>
                        </View>
                </View>
        )
}

export default Header