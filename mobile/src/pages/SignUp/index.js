import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import api from '../../services/api';

import styles from  './styles';
import colors from '../../styles/colors';

export default function LoginScreen(){
  const navigation = useNavigation();
  const route = useRoute();  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [foto, setFoto] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailInvalidError, setEmailInvalidError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);

  function navigateToLogIn(){
    navigation.navigate('Login');
  }

  function navigateToMainScreen(){
    navigation.navigate('MainScreen');
  }

  function errorVerification(data){
    if(!data.nome){
      setNameError(true);
    } else {
      setNameError(false);
    }

    if(!data.email){
      setEmailError(true);
      setEmailInvalidError(false);
    } else {
      //TODO: Search for free mail verification API
      if(!data.email.includes('@') || !data.email.includes('.')){
        setEmailError(true);
        setEmailInvalidError(true);
      } else {
        setEmailError(false);
        setEmailInvalidError(false);
      }
    }

    if(!data.senha){
      setSenhaError(true);
    } else {
      setSenhaError(false);
    }
  }

  async function randomSignUp(){
    const data = {nome, senha, email, foto : "http://"};

    errorVerification(data);

    if(data.nome && data.senha && data.email){
      try{
        const verification = await api.post('/signUpVerification', data);
  
        if(verification.data.length !== 0){
          console.log('Email já cadastrado.');
        } else{ 
          const response = await api.post('/users', data);
  
          if(response.data.id){
            api.defaults.headers.authorization = response.data.id;
            navigation.navigate('MainScreen');
          } else {
            console.log("Usuário Inválido.")
          }
        }     
        
      } catch(error) {
        console.log(error);
      } 
    }       
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToLogIn}>
          <Feather name="arrow-left" size={36} color="rgba(0,0,0,0.14)"/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Cadastrar-se
        </Text>
        <View style={
         !nameError ? 
          [styles.textInputSection, { marginBottom: 10 }] 
         : 
          [styles.textInputSection, { marginBottom: 10, borderColor: colors.primaryRedLowerOpacity }]  
        }>
          <Feather 
            name="user" 
            size={18} 
            color={
              !nameError ? 
              colors.mediumGray 
              : 
              colors.primaryRedLowerOpacity
            } 
            style={styles.textInputIcon}
          />
          <TextInput
            selectionColor ={colors.mediumGray}
            style={styles.textInput}
            placeholder={" Nome"}
            secureTextEntry={false}
            onChangeText={text => setNome(text)}
            value={nome}
          />
        </View>
        <View style={
         !emailError ? 
          [styles.textInputSection, { marginBottom: 10 }] 
         : 
          [styles.textInputSection, { marginBottom: 10, borderColor: colors.primaryRedLowerOpacity }]  
        }>
          <Feather 
            name="mail" 
            size={18} 
            color={
              !emailError ? 
              colors.mediumGray 
              : 
              colors.primaryRedLowerOpacity
            } 
            style={styles.textInputIcon}
          />
          <TextInput
            selectionColor ={colors.mediumGray}
            style={styles.textInput}
            placeholder={" E-mail"}
            secureTextEntry={false}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>        
        <View style={
         !senhaError ? 
          styles.textInputSection 
         : 
          [styles.textInputSection, { borderColor: colors.primaryRedLowerOpacity }]  
        }>
          <Feather 
            name="lock" 
            size={18} 
            color={
              !senhaError ? 
              colors.mediumGray 
              : 
              colors.primaryRedLowerOpacity
            } 
            style={styles.textInputIcon}
          />
          <TextInput
            selectionColor ={colors.mediumGray}
            style={styles.textInput}
            placeholder={" Senha"}
            secureTextEntry={true}
            onChangeText={text => setSenha(text)}
            value={senha}
          />
        </View>

        { (nameError || emailError || senhaError) &&
          (
          emailInvalidError ?
            <Text style={styles.errorMessageText}>E-mail inválido.</Text>
          :
            <Text style={styles.errorMessageText}>Gentileza preencher os campos.</Text>
          )
        }
        
        <TouchableOpacity style={[styles.button, { marginTop: 76 }]} onPress={randomSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signUpButton} 
          onPress={navigateToLogIn}
          >
            <Feather name="log-out" size={16} color={colors.mediumGray}/>
            <Text style={styles.signUpButtonText}> Já tenho uma conta.</Text>
            
          </TouchableOpacity>
      </View>
    </View>
  );
}