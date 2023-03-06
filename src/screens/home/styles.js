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
        borderColor: colors.primary,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 40,
        width: '60%',
        textAlign: 'center',
        height:50,
        backgroundColor: colors.white,
        
        
    },

    
      contentContainer: {
        paddingHorizontal: 40,
      },

      gradient: {
        flex: 1,
      },
      

      containerFlightInfo: {
        marginTop: 60,
        paddingVertical: 20,
        
        width: '90%',
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