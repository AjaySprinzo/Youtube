import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Header from '../components/Header';

const Subscription = ({ navigation }) => {
  const handleSubscribe = () => {
    alert('Subscribed successfully!');
  };

  return (
    <>
      <Header />
      <SafeAreaView style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

        <View style={{ marginBottom: RFValue(20), }}>
          <Text style={{
            fontSize: RFValue(24),
            fontWeight: 'bold',
            color: '#000',
          }}>Subscribe Now</Text>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: RFValue(20),
        }}>
          <Image
            source={require('../assets/images/subscribe.png')}
            style={{
              width: RFValue(200),
              height: RFValue(150),
              marginBottom: RFValue(20),
            }}
          />
          <Text style={{
            fontSize: RFValue(22),
            fontWeight: 'bold',
            color: '#000',
            textAlign: 'center',
            marginBottom: RFValue(10),
          }}>Become a Premium Member</Text>
          <Text style={{
            fontSize: RFValue(16),
            color: '#666',
            textAlign: 'center',
            marginBottom: RFValue(20),
          }}>
            Subscribe to get access to exclusive content, ad-free experience, and more!
          </Text>
          <TouchableOpacity style={{
            backgroundColor: '#f4511e',
            paddingVertical: RFValue(10),
            paddingHorizontal: RFValue(20),
            borderRadius: RFValue(5),
          }} onPress={handleSubscribe}>
            <Text style={{
              fontSize: RFValue(18),
              color: '#fff',
              fontWeight: 'bold',
            }}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};


export default Subscription;
