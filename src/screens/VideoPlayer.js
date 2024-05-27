import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import WebView from 'react-native-webview';

const VideoPlayer = ({ route }) => {
  const navigation = useNavigation();
  const { videoUrl, title, description } = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 10,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/images/backButton.png')}
          style={{ height: 30, width: 30 }}
        />
      </TouchableOpacity>
      <View
        style={{
          width: '100%',
          height: 220,
        }}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: videoUrl }}
        />
      </View>
      <View style={{flexDirection:'row',alignItems:"center"}}>
      <Image
        source={require('../assets/images/profile.png')}
        style={{ height: RFValue(40), width: RFValue(40), margin: 5 }}
      />
      <View style={{flex:1}}>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get('screen').width - 50,
          margin: 9,
          fontWeight: 'bold',
          color: "#000"
        }}
        numberOfLines={3}
        ellipsizeMode="tail">
        {title}
      </Text>
      <Text
        style={{
          fontSize: 17,
          width: Dimensions.get('screen').width - 50,
          margin: 9,
          fontWeight: "600",
          color: "#000", 
        }}
        numberOfLines={3}
        ellipsizeMode="tail">
        {description}
      </Text>
      </View> 
      </View>
      <View style={{ borderBottomWidth: 1 }} />
    </SafeAreaView>
  );
};

export default VideoPlayer;