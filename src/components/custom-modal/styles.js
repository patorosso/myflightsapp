import { StyleSheet} from "react-native";
import { colors } from "../../constants";

export const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 20,
        marginTop: 550,
        paddingVertical: 20,
        borderRadius: 16,
        elevation: 5,
        backgroundColor: '#0E1450',
      },
      modalTitle: {
        fontSize: 14,
        fontFamily: 'Nunito-Bold',
        color: colors.white,
        marginBottom: 10,
      },
      modalDetailContainer: {
        padddingVertical: 20,
      },
      modalDetailMessage: {
        fontSize: 17,
        fontFamily: 'Nunito-Regular',
        color: colors.white,
      },
      selectedSong: {
        fontSize: 14,
        color: colors.white,
        fontFamily: 'Nunito-Bold',
        paddingVertical: 10,
        textAlign: 'center',
        marginBottom: 20,
      },
      modalButtonContainer: {
        width: '70%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
      }
});