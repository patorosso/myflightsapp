import { StyleSheet } from "react-native";
import { colors } from "../../constants";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        fontFamily: "Nunito-Medium",
        textAlign: 'center',
        fontSize: 20
    }
});