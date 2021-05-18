import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: colors.mediumGray,
  },
  
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'stretch',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.mediumGray,
    paddingHorizontal: 15,
    paddingBottom: 5,
  },

  profileTouchable: {
    flexDirection: 'row',
  },

  imageBorder: {
    width: 55,
    height: 55,
    borderRadius: 55,
    borderColor: colors.black,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  profileImage: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    borderRadius: 500,
  },

  profileName: {
    fontWeight: 'bold',
    paddingTop: 28,
    paddingLeft: 5,
  },

  mainContent: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  map : {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.mediumGray,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },

  createReportButton: {
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: 50,
  },

  createReportButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },

  searchButton: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: 50,
  },

  searchButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    paddingLeft: 5,
  },

  reportBox: {
    flex: 1,
    paddingTop: 230,
    paddingLeft: 20,
  },

  report: {
    alignSelf: 'flex-end',
    width: 350,
    padding: 24,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 16,
  },

  porpertyValueBlock:{
    flexDirection: 'row',
    width: 190,
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

  reportImageAndDescriptionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },

  reportImageBox:{
    height: 82.4, 
    width: 124,
    borderWidth: 2,
    borderColor: colors.lightGray,
  },

  reportImage: {
    height: 82.4, 
    width: 124,
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

  statusAndInspectButtonBox:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  inspectButtonBox:{
    paddingTop: 10,
  },

  inspectReportButton:{
    height: 24,
    paddingLeft: 2,
    paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.lightGray,
    borderWidth: 2,
  },

  inspectReportButtonText:{
    color: colors.black,
    opacity: 0.7
  },

});