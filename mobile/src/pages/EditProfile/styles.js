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
  
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGray,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.mediumGray
  },

  buttonContainer: {
    paddingHorizontal: 16,
    paddingTop: 100,
  },

  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },

  content: {
    
  },

  textInput: {
    flex: 1,
    height: 40,    
    marginBottom: 0,
  },

  textInputSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.mediumGray,
    borderBottomWidth: 1,
  },
  
  textInputIcon:{
    paddingRight: 10,
    paddingLeft: 12,
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
    borderRadius: 10000,
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

  deleteAccountBox: {
  },

  deleteAccountBoxChild:{
    position: 'absolute',
    right: 10,
    top: -28,
    width: 150,
    padding: 5,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  deleteAccountText: {
    color: colors.primaryRed,
    opacity: 0.5,
    fontSize: 16,
    fontWeight: 'bold',
  },

  deleteAccountModal:{
    zIndex: 3,
    width: 253,
    height: 165,
    position: 'absolute',
    alignSelf: 'center',
    top: 210,
    backgroundColor: colors.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.mediumGray,
  },

  deleteAccountModalHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
  },

  deleteAccountModalTextBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  deleteAccountModalText: {
    paddingHorizontal: 20,
    paddingBottom: 25,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.black,
    opacity: 0.6
  },

  buttonsBoxModal: {
    borderTopWidth: 1,
    borderColor: colors.mediumGray,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  deleteAccountButtonModalYes: {
    paddingHorizontal: 40,
    paddingVertical: 5,
    borderRightWidth: 1,
    borderColor: colors.mediumGray
  },  

  deleteAccountButtonYesText:{
    color: colors.primaryRed,
    opacity: 0.6,
    fontSize: 24,
    fontWeight: 'bold',
  },

  deleteAccountButtonNoText:{
    color: colors.primaryGreen,
    fontSize: 24,
    fontWeight: 'bold',
  }

});