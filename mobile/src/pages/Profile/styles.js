import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: colors.white
  },

  header: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  }, 

  content: {
    
  },

  optionTouchable: {
    paddingBottom: 10,
    paddingTop: 10,
    borderColor: colors.black,
    opacity: 0.5,
    borderBottomWidth: 1,
  },

  optionTouchableText: {
    color: colors.black,
    opacity: 0.8,
    fontSize: 18,
    paddingLeft: 10,
  },

  profile: {
    alignItems: 'center',
    paddingBottom: 50,
  },

  imageBorder:{
    width: 260,
    height: 260,
    borderRadius: 130,
    borderColor: colors.black,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  profilePicture: {
    width: 250,
    height: 250,
    resizeMode: 'stretch',
    borderRadius: 100000,
  },

  profileText: {
    paddingTop: 30,
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 20,
  },

  editProfile: {
    flexDirection: 'row',
  },

  moreProfileIcon: {
    position: 'absolute',
    right: -30,// check the hitBox
  },

  editProfileIcon: {
    position: 'absolute',
    bottom: -10,
    right: -10,
  },

});