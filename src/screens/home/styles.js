import { StyleSheet } from "react-native";
import { colors } from "../../constants";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
    },

    gradient: {
        flex: 1,
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
        fontFamily: 'Nunito-Medium',
        
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
      

      
      

      


    
    
    
});