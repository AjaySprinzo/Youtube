import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, TouchableOpacity, FlatList, Image, ActivityIndicator, Text } from 'react-native';
import { useSelector } from 'react-redux';
import MiniCard from '../components/MiniCard';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const cardData = useSelector(state => state);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => { // Simulate a network request delay
      const filtered = cardData.filter(item =>
        item.p_name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
      setLoading(false);
    }, 500);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', elevation: 5 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/backButton.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          style={{ width: '70%', height: 40, borderWidth: 1, paddingHorizontal: 10, borderRadius: 30, backgroundColor: '#e6e6e6' }}
          placeholder="Search here ..."
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image source={require('../assets/images/search.png')} style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.p_id.toString()}
          renderItem={({ item }) => (
            <MiniCard
              videoId={item.p_id}
              title={item.p_name}
              description={item.p_desc}
              imageUrl={item.p_image}
              videoUrl={item.url}
            />
          )}
          ListEmptyComponent={() => (
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <Text>No results found</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
