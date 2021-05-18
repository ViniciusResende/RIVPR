import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'
import colors from '../../styles/colors';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  reportList: {
    paddingTop: 32,
  },

  report: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 16,
  },

  porpertyValueBlock:{
    flexDirection: 'row',
    borderColor: colors.lightGray,
    borderBottomWidth: 1,
  },

  reportProperty: {
    fontSize: 16,
    color: colors.black,
    opacity: 0.6,
    fontWeight: 'bold'
  },

  reportValue: {
    paddingLeft: 5,
    fontSize: 15,
    color: colors.textGray
  },

  reportImageDescriptionBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },

  reportImage: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },

  reportDescription: {
    paddingLeft: 10,
    flexShrink: 1
  },

  porpertyValueBlockOwner: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  reportOwnerProperty: {
    color: colors.black,
    fontSize: 8,
    paddingTop: 4
  },
  
  reportOwnerName: {
    color: colors.black,
    fontSize: 12,
    paddingLeft: 4,
  },

  
})