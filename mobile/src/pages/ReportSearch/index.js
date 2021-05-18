import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import styles from  './styles';
import colors from '../../styles/colors';

export default function ReportSearch(){

  const navigation = useNavigation();
  const route = useRoute();

  function navigateToMainScreen(){
    navigation.navigate('MainScreen');
  }

  let region;
  
  region = {
    latitude: 12.840575,
    longitude: 77.651787,
    latitudeDelta: 0.025,
    longitudeDelta: 0.025,
  }

  // function getAddress(){
  //   //function to get address using current lat and lng
  //   fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + region.latitude+"," + region.longitude +"&key=" + "AIzaSyDBrh6m7r9YAOFAdfpHESa7neoBLkLiDdc").then((response) => response.json()).then((responseJson) => {
  //     console.log("ADDRESS GEOCODE is BACK!! => " +
  //   JSON.stringify(responseJson));
  //      this.setState(
  //        { address:         JSON.stringify(responseJson.results[0].formatted_address)
  //         .replace(/"/g, "")
  //        });
  //      });
  //   }
  //   console.log(getAddress());

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToMainScreen}>
          <Feather name="arrow-left" size={36} color="rgba(0,0,0,0.14)"/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={[styles.textInputSection, { marginBottom: 30 }]}>
          <Feather name="map-pin" size={18} color={colors.mediumGray} style={styles.textInputIcon}/>
          <TextInput
            selectionColor ={colors.mediumGray}
            style={styles.textInput}
            placeholder={" Localidade"}
            secureTextEntry={false}
          />
        </View>

        <Text style={styles.descriptionText}> Filtros </Text>        

        <View style={styles.selectBoxGroup}>
          <View style={styles.selectBox}>
            <Picker
              selectedValue={0}
              style={styles.typeSelector}
              onValueChange={() => {}}
              mode={'dialog'}
              enabled={true}
              dropdownIconColor={colors.mediumGray}
              >
              <Picker.Item label="Tipos" value="0"/> 
              <Picker.Item label="Buraco na Estrada" value="buraco na rua"/>          
              <Picker.Item label="Poste sem Luz" value="Poste sem Luz" />
            </Picker>
          </View>

          <View style={styles.selectBox}>
            <Picker
              selectedValue={0}
              style={styles.typeSelector}
              onValueChange={() => {}}
              mode={'dropdown'}
              enabled={true}
              dropdownIconColor={colors.mediumGray}
              >
              <Picker.Item label="Status" value="0"/> 
              <Picker.Item label="Em andamento" value="1"/>          
              <Picker.Item label="Concluído" value="Concluído" />
            </Picker>
          </View>
        </View>        
        
        <TouchableOpacity style={styles.button} onPress={navigateToMainScreen}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
}