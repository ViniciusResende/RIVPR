import React, { useState, useEffect } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';


import styles from './styles';

export default function MainScreen(){
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigation = useNavigation();
  const route = useRoute();

  function navigateToProfile(){
    navigation.navigate('Profile');
  }  
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getLastKnownPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log(location);

  return(
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
        // latitude: location.coords.latitude,
        // longitude: location.coords.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        zoomTapEnabled: true,
        zoomControlEnabled: true,
        }}
      >
      </MapView>
    </View>
  );
}