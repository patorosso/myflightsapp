import { StyleSheet } from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
      },
      title: {
        fontSize: 18,
        fontFamily: 'Nunito-Bold',
        color: colors.title,
        padding: 10,
      },
      contentList: {
        flex: 1,
      },
});