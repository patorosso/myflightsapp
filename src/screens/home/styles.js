import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    },
    
    
});