import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";


const Settings = () => {

    return (
        <LinearGradient  
        colors={[  colors.darkblue, colors.primary]} 
        style={{flex: 1 }}>
            <View style={styles.container}>
                <Text style={{color: 'white', fontFamily: 'Nunito-Bold', fontSize: 30}}>Coming up: {'\n'}-Language {'\n'}-Light/Dark mode</Text>
            </View>
        </LinearGradient>
    )
}

export default Settings;