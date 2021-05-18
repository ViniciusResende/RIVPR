import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { View, FlatList ,Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

const reportPictures = {
  default: "data:image/jpeg;base64,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",
  streetHole: "http://midia.gruposinos.com.br/_midias/jpg/2017/04/11/buraco-2980152.jpg",
  eletricCable: "https://br.habcdn.com/photos/questions/medium/6855edd4-2de8-484e-8f55-756670629c58-2239799.jpg",
  lightPole: "data:image/jpeg;base64,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",
  treeIcon: "https://f088b146830a59b5.cdn.gocache.net/uploads/noticias/2020/10/14/khy3ornqq457.jpeg", 
}

const getReportPicture = pictureName => reportPictures[pictureName] || reportPictures.default;

export default function ReportHistory(){
  const navigation = useNavigation();
  const [reports, setReports] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToProfile(){
    navigation.navigate('Profile');
  }

  async function loadReports() {
    if (loading) {
      return;
    }

    if (total > 0 && reports.lenght === total){
      return;
    }

    setLoading(true);

    const response = await api.get('reportsHistory', {
      params: { page }
    });
    
    // const response2 = await api.get('status', {
    //   params: {  }
    // });

    console.log(response.data)
  
    setReports([... reports, ... response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(()=> {
    loadReports();
  }, []);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToProfile}>
          <Feather name="arrow-left" size={36} color="rgba(0,0,0,0.14)"/>
        </TouchableOpacity>
      </View>

      <FlatList
        data={reports}
        style={styles.reportList}
        keyExtractor={report => String(report.id)}
        onEndReached={loadReports}
        onEndReachedThreshold={0.2}
        renderItem={({ item: report }) => (
          <View style={styles.report}>
            <View style={styles.porpertyValueBlock}>
              <Text style={styles.reportProperty}>Tipo:</Text>
              <Text style={styles.reportValue}>{report.typeDescription}</Text>
            </View>
            <View style={[styles.porpertyValueBlock, { paddingTop: 10 }]}>
              <Text style={styles.reportProperty}>Status:</Text>
              <Text style={styles.reportValue}>{report.statusDescription}</Text>
            </View>
            <View style={styles.reportImageDescriptionBlock}>
              <Image style={styles.reportImage} source={{ uri: getReportPicture(report.typeIcon)}}/>            
              <Text style={styles.reportDescription}>{report.descricao}</Text>
            </View>
            <View style={styles.porpertyValueBlockOwner}>
              <Text style={styles.reportOwnerProperty}>Reportado por:</Text>
              <Text style={styles.reportOwnerName}>{report.nome}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
  
}