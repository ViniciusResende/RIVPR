import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, FlatList ,Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function ReportHistory(){
  const route = useRoute();
  const navigation = useNavigation();
  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const {report_id} = route.params;
  const [loading, setLoading] = useState(false);

  function navigateToReportInspect(){
    navigation.navigate('ReportInspect');
  }

  async function loadComments() {
    if (loading) {
      return;
    }

    if (total > 0 && comments.lenght === total){
      return;
    }

    setLoading(true);

    const response = await api.get('comment', {
      params: { report_id: report_id, page: page }
    }); 
  
    setComments([... comments, ... response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }
  // console.log(comments)

  useEffect(()=> {
    loadComments();
  }, []);

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigateToReportInspect}>
          <Feather name="arrow-left" size={36} color="rgba(0,0,0,0.14)"/>
        </TouchableOpacity>
      </View>

      <FlatList
        data={comments}
        style={styles.reportList}
        keyExtractor={comment => String(comment.id)}
        onEndReached={loadComments}
        onEndReachedThreshold={0.2}
        renderItem={({ item: comment }) => (
          <View style={styles.comment}>
            <View style={styles.porpertyNameBlock}>
              <Text style={styles.commentCreatorName}>{comment.nome}</Text>
            </View>
            <View style={[styles.propertyCommentTextBlock, { paddingTop: 10 }]}>
              <Text style={styles.commentText}>{comment.texto}</Text>
            </View>            
          </View>
        )}
      />
    </View>
  );
  
}