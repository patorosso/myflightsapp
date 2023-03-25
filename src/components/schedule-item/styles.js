import { StyleSheet} from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: colors.red,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
});