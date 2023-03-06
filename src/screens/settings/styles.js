import { StyleSheet } from "react-native";
import { colors } from "../../constants";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    iconContainer: {
        
        width: '80%',
        height: '50%',
        
        flexDirection: 'column',
        justifyContent: 'space-between',

        
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 70,
    },
    
});