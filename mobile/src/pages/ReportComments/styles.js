import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import colors from '../../styles/colors';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  comment: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 16,
  },  

  porpertyNameBlock: {
    borderBottomWidth: 1,
    borderColor: colors.lightGray
  },

  commentCreatorName: {
    fontSize: 16,
    color: colors.black,
    opacity: 0.6,
    fontWeight: 'bold'
  },

  commentText: {
    fontSize: 12,
    color: colors.black,
    opacity: 0.6
  }
  
})