import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";


const Settings = () => {

    return (
        <LinearGradient  
        colors={[  colors.darkblue, colors.primary]} 
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.container}>
                
            </View>
        </LinearGradient>
    )
}

export default Settings;