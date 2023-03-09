import { colors } from "../../constants";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    text: {
        color: colors.white,
        fontFamily: 'Nunito-Bold',
        fontSize: 40,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
});