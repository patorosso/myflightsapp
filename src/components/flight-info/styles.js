import { StyleSheet } from 'react-native';

import { colors } from '../../constants';

export const styles = StyleSheet.create({
  containerInfo:{
    marginHorizontal: 20,
    
},


containerFirstFlightInfo: {
    marginTop: 15,
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
    color: 'green',
    fontSize: 20,
    alignSelf: 'center',
    
  },

  body: {
    flexDirection: 'row',
    
  },
  leftRegion: {
    flex: 0.5,
    borderRightWidth: 0.3,
    
  },
  rightRegion: {
    borderLeftWidth: 0.3,
    flex: 0.5,
    
  },
  
  
});