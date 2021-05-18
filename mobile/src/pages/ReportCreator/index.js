import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Location from 'expo-location';

import api from '../../services/api';

import styles from  './styles';
import colors from '../../styles/colors';

export default function ReportCreator(){
  const navigation = useNavigation();
  const route = useRoute();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');
  const [datahoraCadastro, setDatahoraCadastro] = useState('');
  const [tipo, setTipo] = useState();  
  // const [user_id, setUserId] = useState('');
  // const user_id = '25cd9537';
  

  function navigateToSignUp(){
    navigation.navigate('SignUp');
  }

  function navigateToMainScreen(){
    navigation.navigate('MainScreen');
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds(); 
    setDatahoraCadastro(
      year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec
    );
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  let region;

  if(location === null){
    region = {
      latitude: 49.2576508,
      longitude: -123.2639868,
      latitudeDelta: 100,
      longitudeDelta: 100,
    }
  } else if (location !== null){
    region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }
  }


console.log(region);
  // mandar o header para pegar o user id
  async function createReport(){
    const data = {local: region, descricao, foto: "http://", datahoraCadastro, tipo};
    //console.log(data.local.latitude);
    try{
      const response = await api.post('/reports', data);
      console.log(response.data);
      if(response.data.id){
        navigation.navigate('MainScreen');
      } else {
        console.log("Falha ao cadastrar report.");
      }
      
    } catch(error) {
      console.log(error);
    }    
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToMainScreen}>
          <Feather name="arrow-left" size={36} color="rgba(0,0,0,0.14)"/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {/* <View style={[styles.textInputSection, { marginBottom: 10 }]}>
          <Feather name="map-pin" size={18} color={colors.mediumGray} style={styles.textInputIcon}/>
          <TextInput
            selectionColor ={{colors.mediumGray}}
            style={styles.textInput}
            placeholder={" Localidade"}
            secureTextEntry={false}
          />
        </View>         */}
        <View style={[styles.textInputSection, { marginBottom: 30 }]}>
        <Feather name="edit-2" size={18} color={colors.mediumGray} style={styles.textInputIcon}/>
          <TextInput
            selectionColor ={colors.mediumGray}
            style={styles.textInput}
            placeholder={" Descrição"}
            secureTextEntry={false}
            onChangeText={text => setDescricao(text)}
            value={descricao}
          />
        </View>

        <View style={styles.selectBox}>
          <Picker
            style={styles.typeSelector}
            onValueChange={text => setTipo(text)}
            mode={'dialog'}
            enabled={true}
            dropdownIconColor={colors.mediumGray}
            >
            <Picker.Item label="Tipos" value="0"/> 
            <Picker.Item label="Buraco na Estrada" value="1"/>          
            <Picker.Item label="Poste sem Luz" value="2" />
            <Picker.Item label="Fio de Poste Cortado" value="3" />
            <Picker.Item label="Arvore Caída" value="4" />
          </Picker>
        </View>        

        <TouchableOpacity 
          style={styles.addImage} 
          onPress={() => {}}
          >
            <Feather name="image" size={48} color={colors.mediumGray}/>
            <Text style={styles.addImageText}> Adicionar Imagem.</Text>
            
        </TouchableOpacity>
        
        <View style={{ paddingTop: 40 }}>
          <TouchableOpacity style={styles.button} onPress={createReport}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>
        </View>

        
      </View>
    </View>
  );
}