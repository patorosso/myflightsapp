import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";


const Settings = ({route}) => {
    const {flightNumber,latitude,longitude,altitude} = route.params;

    return (
        <View style={styles.container}>
            <LinearGradient  
            colors={[  colors.darkblue, colors.primary]} 
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.text}>Flight Number:{flightNumber}</Text>
                <Text style={styles.text}>Latitude:{latitude}</Text>
                <Text style={styles.text}>Longitude:{longitude}</Text>
                <Text style={styles.text}>altitude:{altitude}</Text>
            </LinearGradient>
        </View>
    )
}

export default Settings;