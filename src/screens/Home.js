import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import Cards from '../components/Cards';

const HomePage = () => {
  const dispatch = useDispatch();
  const cardData = useSelector(state => state);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://impactmindz.in/client/boub/back_end/api/product');
        const data = await response.json();
        if (data.status === 1 && data.data) {
          const allVideos = Object.values(data.data).flat(); // Flatten the data object into an array
          dispatch({ type: 'add', payload: allVideos });
        } else {
          setError('Failed to fetch data');
        }
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.p_id.toString()}
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
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
