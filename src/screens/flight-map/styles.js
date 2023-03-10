import { colors } from "../../constants";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    text: {
        color: colors.white,
        fontFamily: 'Nunito-Bold',
        fontSize: 40,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
      markerImage: {
        backgroundColor:colors.redFides,
        size:44,
        color: colors.redFides,
      },

    flightAirportContainer: {
      alignItems: 'center',
      borderRadius: 50,
      borderColor: colors.redFides,
      borderWidth: 3,
      backgroundColor: colors.darkblue, 
      justifyContent: 'center',
    },
     
    flightNumberContainer: {
      
      alignItems: 'center',
      borderRadius: 20,
      borderColor: colors.redFides,
      borderWidth: 3,
      backgroundColor: colors.darkblue, 
      },
    flightNumberText: {
      
      color: colors.white, 
      borderRadius: 20, 
      fontFamily: 'Nunito-Bold',
      textAlign: 'center',
      padding: 4,
      paddingHorizontal: 23,
      fontSize: 22,
    },
    
});