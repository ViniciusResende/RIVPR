import React, { useState, useEffect, useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import { Animated, Text, TextInput, View, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native'

import api from '../../services/api';

import styles from  './styles';
import colors from '../../styles/colors';

export default function ReportInspect(){
  const navigation = useNavigation();
  const route = useRoute();
  const {report_id} = route.params; 
  const [datahoraCadastro, setDatahoraCadastro] = useState('');
  const [texto, setTexto] = useState('');
  const [shownCondition, setShownCondition] = useState(false);
  const [thumbUpColor, setThumbUpColor] = useState(colors.lightGray);
  const [thumbDownColor, setThumbDownColor] = useState(colors.lightGray);
  const [agreeCondition, setAgreeCondition] = useState();
  const [novoStatus, setNovoStatus] = useState('');

  const [agreeCount, setAgreeCount] = useState(0);
  const [disagreeCount, setDisagreeCount] = useState(0);
 

  const fadeAnim = useRef(new Animated.Value(0.4)).current;

  function navigateToMainScreen(){
    navigation.navigate('MainScreen');
  }

  function navigateToReportComments(report_id){
    console.log("navigate: ",report_id)
    navigation.navigate('ReportComments', {report_id});
  }



  useEffect(() => {
    var date = new Date().getDate(); 
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear(); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds(); 
    setDatahoraCadastro(
      year + '-' + month + '-' + date + ' ' + hours + ':' + min + ':' + sec
    );
    confirmationCount();
    disagreeCountFunction();
  })

  async function confirmationCount(){
    const responseConfirmation = await api.get('confirmStatusCounting',{
      params: { report_id }
    });
    // console.log(responseConfirmation.data[0].count);
    setAgreeCount(responseConfirmation.data[0].count);
  }

  async function disagreeCountFunction(){
    const responseDisagree = await api.get('disagreeStatusCounting',{
      params: { report_id }
    });
    // console.log(responseConfirmation.data[0].count);
    setDisagreeCount(responseDisagree.data[0].count);
  }

  async function confirmStatus(){
    setShownCondition(false);
    Animated.timing(
      fadeAnim,
      {
        toValue: 0.4,
        duration: 500,
        useNativeDriver: true
      }
    ).start();
    setAgreeCondition(true);
    setNovoStatus('');
    setThumbUpColor(colors.secondaryGreen)
    setThumbDownColor(colors.lightGray)
  }


  async function disagreeStatus(){
    setShownCondition(true);
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }
    ).start();
    setAgreeCondition(false);
    setThumbDownColor('rgba(255,0,0,0.6)')
    setThumbUpColor(colors.lightGray)
  }

  console.log(report_id);

  async function confirmReport(){ 
    try{
      if(texto !== ''){
        const dataComment = {report_id, texto, datahoraCadastro};
        const response = await api.post('/comment', dataComment);
        // console.log(verification.data);      
        if(response.data.id){
          
        } else {
          console.log("Falha ao registrar comentário")
        }
      }
      if(agreeCondition !== ''){
        const dataConfirmation = {confirma: agreeCondition, novoStatus, datahoraCadastro, report_id};
        const response2 = await api.post('/reportsConfirmation', dataConfirmation);
        if(response2.data){
          // console.log(response2);
        } else {
          console.log("Falha ao registrar confirmação")
        }
      }
      navigation.navigate('MainScreen');
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
        <View style={[styles.textInputSection, { marginBottom: 30 }]}>
          <Feather name="edit-2" size={18} color={colors.mediumGray} style={styles.textInputIcon}/>
          <TextInput
            selectionColor ={colors.mediumGray}
            style={styles.textInput}
            placeholder={" Adicionar comentário"}
            secureTextEntry={false}
            onChangeText={text => setTexto(text)}
            value={texto}
          />
        </View>

        <Text style={styles.descriptionText}> Você confirma o status desse problema? </Text> 

        <View style={styles.confirmationBox}>
          <TouchableOpacity 
            style={styles.confirmationImage} 
            onPress={confirmStatus}
            >
              <Feather name="thumbs-up" size={48} color={thumbUpColor}/>              
              
          </TouchableOpacity>
          <Text style={styles.confirmationTextYes}>Sim</Text>         

          <TouchableOpacity 
            style={[styles.confirmationImage, {paddingLeft: 40}]} 
            onPress={disagreeStatus}
            >
              <Feather style={{transform: [{scaleX: -1}]}} name="thumbs-down" size={48} strokeWidth={1} color={thumbDownColor}/>              
              
          </TouchableOpacity>
          <Text style={styles.confirmationTextNo}>Não</Text>
          
        </View>

        <View style={styles.confirmationCounterBox}>
          <Text style={styles.confirmationCounterTextYes}>{agreeCount}</Text>
          <Text style={styles.confirmationCounterTextNo}>{disagreeCount}</Text>
        </View>

        <Animated.View style={styles.statusChangeBox, { opacity: fadeAnim} }>
         <Text style={styles.descriptionText}> Solicitar alteração de Status: </Text>       

          <View style={styles.selectBox}>
            <Picker
              selectedValue={0}
              style={styles.typeSelector}
              onValueChange={value => setNovoStatus(value)}
              mode={'dropdown'}
              enabled={shownCondition}
              dropdownIconColor={colors.mediumGray}
              >
              <Picker.Item label="Status" value="0"/> 
              <Picker.Item label="Novo problema" value="1"/>
              <Picker.Item label="Solução em andamento" value="2"/>  
              <Picker.Item label="Problema concluído" value="3"/>  
              <Picker.Item label="Problema ainda não concluído" value="4"/>
            </Picker>
          </View>
        </Animated.View>

        <TouchableOpacity 
          style={styles.seeCommentsImage} 
          onPress={() => navigateToReportComments(report_id)}
          >
            <Feather name="message-circle" size={48} color="#c4c4c4"/>
            <Text style={styles.seeCommentsText}> Vizualizar Comentários</Text>
            
        </TouchableOpacity>
              
        
        <TouchableOpacity style={styles.button} onPress={confirmReport}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>

        
      </View>
    </View>
  );
}