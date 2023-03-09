
import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";
import MapView, {Marker } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons'; 





const FlightMap = ({route}) => {
    const {flightNumber,latitude,longitude,altitude} = route.params;
    

    return (
        <View style={styles.container}>
           <MapView 
            initialRegion={{latitude, longitude, latitudeDelta: 37,longitudeDelta: 37}}
            provider="google" style={styles.map}>
                
                <Marker  coordinate={{latitude, longitude}}   imageStyle={{ width: 40, height: 40 }}>
                <View>
                    <MaterialIcons 
                    name={'airplanemode-active'}
                    size={63}
                    color={colors.red}
                    />
                </View>
                </Marker> 
                
            </MapView>
        </View>
    )
}

export default FlightMap;