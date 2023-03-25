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
        flexDirection: 'row',
        marginHorizontal: 20,
        marginBottom: 5,
        borderBottomWidth: 2,
        justifyContent: 'space-evenly'
    },
});