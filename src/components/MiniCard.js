import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const MiniCard = ({ videoId, title, description, imageUrl, videoUrl }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('VideoPlayer', { videoUrl, title , description})}>
      <View style={{ flexDirection: 'row', margin: 10 }}>
        <Image source={{ uri: imageUrl }} style={{ width: 120, height: 90 }} />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;