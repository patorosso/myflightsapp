import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        width: '70%',
        paddingVertical: 20,
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderColor: colors.white,
        borderWidth: 2,
        alignItems: 'center',
      },
      itemList: {
        fontSize: 14,
        color: colors.white,
        fontFamily: 'Nunito-Bold',
        
        
      }
});