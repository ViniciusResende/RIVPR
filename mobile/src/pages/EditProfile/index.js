import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from  './styles';

import api from '../../services/api';
import colors from '../../styles/colors';

export default function EditProfile(){
  const navigation = useNavigation();
  const route = useRoute();
  const [userData, setUserData] = useState([{nome: 'loading'}]);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [foto, setFoto] = useState('');

  const [deleteAccDisplay, setDeleteAccDisplay] = useState('none');
  const [deleteAccPopUpDisplay, setDeleteAccPopUpDisplay] = useState('none');

  function changeDeleteAccDisplay(){
    if(deleteAccDisplay === 'none'){
      setDeleteAccDisplay('flex');
    } else if(deleteAccDisplay === 'flex'){
      setDeleteAccDisplay('none');
    }    
  }

  function changeDeleteAccPopUpDisplay(){
    if(deleteAccPopUpDisplay === 'none'){
      setDeleteAccPopUpDisplay('flex');
    } else if(deleteAccPopUpDisplay === 'flex'){
      setDeleteAccPopUpDisplay('none');
    }    
  }

  async function loadUserInformation() {

    const response = await api.get('users');    
    
    // console.log(response.data);
    setUserData(response.data);
  }

  async function changeUserInformation() {
    if(nome === ''){
      setNome(userData[0].nome)
    }
    if(email === ''){
      setEmail(userData[0].email)
    }
    if(foto === ''){
      setFoto(userData[0].foto)
    }
    const data = { nome, email, foto};
    try{
      const response = await api.put('/users', data);
      
      if(response){        
        navigation.navigate('Profile');
      } else {
        console.log("Usuário Inválido.")
      }
      
    } catch(error) {
      console.log(error);
    }
  }

  function navigateToProfile(){
    navigation.navigate('Profile');
  }

  useEffect(() => {
    loadUserInformation();
  });

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToProfile}>
          <Feather name="arrow-left" size={36} color="rgba(0,0,0,0.14)"/>
        </TouchableOpacity>
      </View>
      <View style={styles.deleteAccountBox, {display: deleteAccDisplay}}>
        <View style={styles.deleteAccountBoxChild}>
          <TouchableOpacity style={styles.deleteAccountButton} onPress={changeDeleteAccPopUpDisplay}>
            <Text style={styles.deleteAccountText}>
              Excluir sua Conta
            </Text>
          </TouchableOpacity>
        </View>        
      </View>   
      <View style={{display : deleteAccPopUpDisplay}}>
        <View style={styles.deleteAccountModal}>
          <View style={styles.deleteAccountModalHeader}>
            <TouchableOpacity onPress={changeDeleteAccPopUpDisplay}>
              <Feather name="x" size={24} color="rgba(0,0,0,0.14)"/>
            </TouchableOpacity>
          </View>
          <View style={styles.deleteAccountModalTextBox}>
            <Text style={styles.deleteAccountModalText}>
              Deseja excluir sua conta?
            </Text>
          </View>
          <View style={styles.buttonsBoxModal}>
            <TouchableOpacity style={styles.deleteAccountButtonModalYes} onPress={() => {console.log('Clicked')}}>
                <Text style={styles.deleteAccountButtonYesText}>
                  Sim
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteAccountButtonModal, {paddingHorizontal: 40, paddingVertical: 5}} onPress={() => {console.log('Clicked')}}>
                <Text style={styles.deleteAccountButtonNoText}>
                  Não
                </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.profile}>
        <View style={styles.editProfile}>
          <View style={styles.imageBorder}>
            <Image style={styles.profilePicture} source={require('../../assets/profilePic.jpg')}/>
          </View>
          <TouchableOpacity style={styles.editProfileIcon}>
            <Feather name="plus-square" size={70} color={colors.black}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreProfileIcon} onPress={changeDeleteAccDisplay}>
            <Feather name="more-vertical" size={50} color={colors.black}/>
          </TouchableOpacity>          
        </View>             
        <Text style={styles.profileText}>{userData[0].nome}</Text>
      </View>
      <View style={styles.content}>    
      <View style={[styles.textInputSection, { marginBottom: 10 }]}>
          <Feather name="user" size={18} color={colors.mediumGray} style={styles.textInputIcon}/>
          <TextInput
            selectionColor ={colors.mediumGray}
            style={styles.textInput}
            placeholder={" Nome"}
            secureTextEntry={false}
            onChangeText={text => setNome(text)}
            value={nome}
          />
        </View>        
        <View style={styles.textInputSection}>
        <Feather name="mail" size={18} color={colors.mediumGray} style={styles.textInputIcon}/>
          <TextInput
            selectionColor ={colors.mediumGray}
            style={styles.textInput}
            placeholder={" E-mail"}
            secureTextEntry={false}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={changeUserInformation}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}