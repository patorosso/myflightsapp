import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";


const Settings = () => {
    return (
        <View style={styles.container}>
            <LinearGradient  
            colors={[  colors.darkblue, colors.primary]} 
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.text}>asdasd</Text>
                <Text style={styles.text}>bsadjbs</Text>
            </LinearGradient>
        </View>
    )
}

export default Settings;