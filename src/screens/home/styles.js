import { StyleSheet } from "react-native";
import { colors } from "../../constants";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    iconContainer: {
        
        width: '80%',
        height: '50%',
        
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    gradientContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    topContainer: {
        flex:0.5, 
        flexDirection:'row',
    },
    topLeft : {
        flex:0.5,
        borderBottomColor:colors.purple,
        borderBottomWidth: 3,
        borderRightColor:colors.purple,
        borderRightWidth:3,
        justifyContent: 'center',
        paddingRight:10
    },
    topRight : {
        flex:0.5,
        borderBottomColor:colors.purple,
        borderBottomWidth: 3,
        borderLeftColor:colors.purple,
        borderLeftWidth:3,
        justifyContent: 'center',
        paddingLeft:10,
    },
    bottomContainer: {
        flexDirection: 'row',
        flex:0.5
    },
    bottomLeft: {
        flex:0.5,
        borderTopColor:colors.purple,
        borderTopWidth: 3,
        borderRightColor:colors.purple,
        borderRightWidth:3,
        justifyContent: 'center',
        paddingRight:10
    },
    bottomRight: {
        flex:0.5,
        borderTopColor:colors.purple,
        borderTopWidth: 3,
        borderLeftColor: colors.purple ,
        borderLeftWidth:3,
        justifyContent: 'center',
        paddingLeft:10
    },







    
});