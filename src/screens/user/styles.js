import { StyleSheet } from "react-native";
import { colors } from "../../constants";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        fontFamily: "Nunito-Medium",
        textAlign: 'center',
        fontSize: 20
    },
    inputName: {
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 18,
        paddingVertical: 10,
        textAlign: "center",
        marginBottom: 30,
    },
    inputLast: {
        
        borderBottomColor: colors.black,
        borderBottomWidth: 1,
        
        fontSize: 18,
        paddingVertical: 10,
        textAlign: "center",
        marginBottom: 70,
    },
});