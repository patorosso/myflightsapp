import { StyleSheet } from "react-native";
import { colors } from "../../constants";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },

    gradient: {
        flex: 1,
      },

      containerSearch: {
        
        position: 'absolute',
        top: 150,
        
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf: 'center',
        width: '80%',
        
    },

    

    input: {
        borderColor: colors.primary,
        borderRadius: 20,
        borderWidth: 1,
        width: '70%',
        textAlign: 'center',
        height:60,
        backgroundColor: colors.white,
        fontFamily: 'Nunito-Regular',
        
    },

    searchIconContainer: {
       
        backgroundColor: colors.primary,
        borderRadius: 60,
        overflow: 'hidden',
        height: 59,
        width: 60,
        justifyContent: 'center',
        
        
    },
    icon: {
        alignSelf: 'center',

    },


    containerInfo:{
        marginHorizontal: 20,
        
    },

    
    containerFirstFlightInfo: {
        marginTop: 60,
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

      buttonMapContainer:{
        marginTop: 40,
        backgroundColor: colors.redFides,
        borderRadius: 30,
        width: '50%',
        alignItems:'center',
        alignSelf:'center',
        height: 40,
        justifyContent: 'center',
        
      },
      buttonMapText:{
        color: 'white',
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        
      },
      

      
      

      


    
    
    
});