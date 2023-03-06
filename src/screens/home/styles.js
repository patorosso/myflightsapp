import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },

    
    
    textUser: {
        fontSize: 40,
        color: colors.yellow,
        fontWeight: 'bold',
        marginBottom: 100,
        marginTop: 150,
    },

    input: {
        borderColor: colors.black,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 40,
        width: '80%',
        paddingLeft: 20,
        height:50,
        backgroundColor: colors.white,
    },

    
      contentContainer: {
        padding: 40,
        
        
      },

      gradient: {
        flex: 1,
      },
      // other styles

      containerFlightInfo: {
        marginTop: 60,
        padding: 40,
        width: '70%',
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


    
    
    
});