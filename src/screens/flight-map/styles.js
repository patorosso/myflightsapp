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
    flightNumberContainer: {
      
      alignItems: 'center',
      borderRadius: 20,
      borderColor: colors.redFides,
      borderWidth: 2,
      },
    flightNumberText: {
      backgroundColor: colors.darkblue, 
      color: colors.white, 
      borderRadius: 20, 
      fontFamily: 'Nunito-Bold',
      textAlign: 'center',
      padding: 4,
      paddingHorizontal: 23,
      fontSize: 22,
    },
    
});