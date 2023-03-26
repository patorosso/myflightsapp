import { StyleSheet } from "react-native";
import { colors } from "../../constants";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50,
        paddingBottom: 50,
    },
    topBar: {
        backgroundColor:'#E2E2E2',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        borderBottomWidth: 1,
    },
    topBarContent: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 5,
        marginTop: 10,
       
        justifyContent: 'space-evenly'
    },
    listContainer: {
        marginHorizontal:20,
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 15,
       
        
    },
    flatList: {
        backgroundColor: colors.white,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        
    },
    
});