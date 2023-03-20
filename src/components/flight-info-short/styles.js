import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export const styles = StyleSheet.create({
  containerInfo:{
    marginHorizontal: 20,
    
},


containerFirstFlightInfo: {
    marginTop: 40,
    paddingVertical: 20,


    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: colors.darkblue,
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 19,
    
  },

  contentContainer: {
    paddingHorizontal: 27,
    flexDirection: 'row',
    
  },

 

  header: {
    flexDirection: 'row',
    marginBottom: 20,
    
    
  },
  headerRight:{
    flex:1,
    textAlign: 'right',
    fontFamily: 'Nunito-Bold',
    fontSize: 30,
  },
  headerLeft:{
    flex:1,
    textAlign: 'left',
    fontFamily: 'Nunito-Bold',
    fontSize: 30,
  },
  headerMid:{
    flex:1,
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    color: 'gray',
    fontSize: 20,
    alignSelf: 'center',
    
  },
  
  
});