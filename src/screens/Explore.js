import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Cards from '../components/Cards';

const Explore = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch('https://impactmindz.in/client/boub/back_end/api/product');
      const data = await response.json();
      if (data.status === 1 && data.data) {
        const videoData = Object.values(data.data).flat();
        setVideos(videoData);
        const uniqueCategories = [...new Set(videoData.map(video => video.cat_name))];
        setCategories(uniqueCategories);
      } else {
        setError('Failed to fetch data');
      }
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const filteredVideos = selectedCategory ? videos.filter(video => video.cat_name === selectedCategory) : videos;

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          marginBottom: 10,
        }}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                { backgroundColor: category === selectedCategory ? 'red' : 'gray' }
              ]}
              onPress={() => handleCategoryPress(category)}
            >
              <Text style={{
                color: 'white',
                fontSize: 18,
              }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={{
          margin: 8,
          fontSize: 22,
          borderBottomWidth: 1,
        }}> {selectedCategory ? `${selectedCategory}` : 'Trending Videos'}</Text>
        <FlatList
          data={filteredVideos}
          keyExtractor={item => item.p_id.toString()}
          renderItem={({ item }) => (
            <Cards
              videoId={item.p_id}
              title={item.p_name}
              description={item.p_desc}
              imageUrl={item.p_image}
              videoUrl={item.url}
            />
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    height: 50,
    width: 180,
    borderRadius: 4,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Explore;
