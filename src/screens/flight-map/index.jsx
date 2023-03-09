import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";
import {MapView,Marker} from 'react-native-maps';


const Settings = ({route}) => {
    const {flightNumber,latitude,longitude,altitude} = route.params;

    return (
        <View style={styles.container}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 40.7128,
                    longitude: -74.0060,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                provider={MapView.PROVIDER_OSM}
                >
                    
            </MapView>
                
            
        </View>
    )
}

export default Settings;

/*
<LinearGradient  
            colors={[  colors.darkblue, colors.primary]} 
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.text}>Flight Number:{flightNumber}</Text>
                <Text style={styles.text}>Latitude:{latitude}</Text>
                <Text style={styles.text}>Longitude:{longitude}</Text>
                <Text style={styles.text}>altitude:{altitude}</Text>
            </LinearGradient>
*/