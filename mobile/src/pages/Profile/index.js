import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from  './styles';

import api from '../../services/api';
import colors from '../../styles/colors';

export default function Profile(){
  const navigation = useNavigation();
  const route = useRoute();
  const [userData, setUserData] = useState([{nome: 'loading'}]);

  async function loadUserInformation() {

    const response = await api.get('users');    
    
    // console.log(response.data);
    setUserData(response.data);
  }

  function navigateToLogin(){
    navigation.navigate('Login');
  }

  function navigateToMainScreen(){
    navigation.navigate('MainScreen');
  }

  function navigateToEditProfile(){
    navigation.navigate('EditProfile');
  }

  function navigateToReportHistory(){
    navigation.navigate('ReportHistory');
  }

  useEffect(() => {
    loadUserInformation();
  });

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToMainScreen}>
          <Feather name="arrow-left" size={36} color="rgba(0,0,0,0.14)"/>
        </TouchableOpacity>
      </View>
      <View style={styles.profile}>
        <View style={styles.editProfile}>
          <View style={styles.imageBorder}>
            <Image style={styles.profilePicture} source={require('../../assets/profilePic.jpg')}/>
          </View>
          <TouchableOpacity style={styles.editProfileIcon} onPress={navigateToEditProfile}>
            <Feather name="edit" size={70} color={colors.black}/>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.moreProfileIcon}>
            <Feather name="more-vertical" size={50} color={colors.black}/>
          </TouchableOpacity> */}
        </View>
        
        <Text style={styles.profileText}>{userData[0].nome}</Text>
      </View>
      <View style={styles.content}>    
        <TouchableOpacity style={styles.optionTouchable} onPress={navigateToReportHistory}>
          <Text style={styles.optionTouchableText}>Histórico de Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionTouchable} onPress={navigateToLogin}>
          <Text style={styles.optionTouchableText}>Terminar Sessão</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionTouchable} onPress={() => {}}>
          <Text style={styles.optionTouchableText}>Ajuda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}