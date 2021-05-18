import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: colors.white
  },

  header: {
    paddingBottom: 20,
  }, 

  content: {
    paddingHorizontal: 36,
  },

  title: {
    color: colors.mediumGray,
    fontWeight: "bold",
    fontSize: 50,
    paddingBottom: 60,
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

  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },

  textInput: {
    flex: 1,
    height: 40,    
    marginBottom: 0
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
  },

  errorMessageText: {
    color: colors.primaryRedLowerOpacity,
    opacity: 0.8,
    fontSize: 12
  },

  signUpButton: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },

  signUpButtonText:{
    color: colors.mediumGray,
  },
});