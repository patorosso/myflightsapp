import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: colors.white,
        fontStyle: "italic",
        marginBottom: 20,
        marginTop: 100,
    },
    textUser: {
        fontSize: 40,
        color: colors.yellow,
        fontWeight: 'bold',
        marginBottom: 150,
    },
    
    
});