import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


import api from '../../services/api';

import styles from  './styles';
import colors from '../../styles/colors';

export default function LoginScreen(){
  const navigation = useNavigation();
  const route = useRoute();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [senhaError, setSenhaError] = useState(false);

  const [isAuhenticationError, setIsAuthenticationError] = useState(false);

  function navigateToSignUp(){
    navigation.navigate('SignUp');
  }

  function errorVerification(data) {
    if(!data.senha){
      setSenhaError(true);
      setIsAuthenticationError(false);
    } else {
      setSenhaError(false);
    }
    if(!data.email){
      setEmailError(true);
      setIsAuthenticationError(false);
    } else {
      setEmailError(false);
    }
  }

  async function randomLogin(){
    const data = {senha, email};

    errorVerification(data);
    if(data.email && data.senha){
      try{
        const response = await api.post('/logins', data);
        
        if(response.data.id){
          api.defaults.headers.authorization = response.data.id;
          navigation.navigate('MainScreen');
        } else {
          console.log("Usuário Inválido.")
        }
        
      } catch(error) {
        setSenhaError(true);
        setEmailError(true);
        setIsAuthenticationError(true);
      }
    } 
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="arrow-left" size={36} color="rgba(0,0,0,0.14)"/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Bem-Vindo ao RIVPR
        </Text>
        <View style={
          !emailError ? 
          [styles.textInputSection, { marginBottom: 10 }] 
          : 
          [styles.textInputSection, { marginBottom: 10, borderColor: colors.primaryRedLowerOpacity }]
        }>
          <Feather 
            name="user" 
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
            selectionColor={colors.mediumGray}
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

        { (emailError || senhaError) &&
          (
          isAuhenticationError ?
            <Text style={styles.errorMessageText}>E-mail ou senha inválidos.</Text>
          :
            <Text style={styles.errorMessageText}>Gentileza preencher os campos.</Text>
          )
        }
        <TouchableOpacity style={styles.forgotPassword} onPress={() => {}}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua Senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={randomLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.signUpButton} 
          onPress={navigateToSignUp}
          >
            <Feather name="log-out" size={16} color={colors.mediumGray}/>
            <Text style={styles.signUpButtonText}> Não tenho cadastro.</Text>
            
          </TouchableOpacity>
      </View>
    </View>
  );
}
