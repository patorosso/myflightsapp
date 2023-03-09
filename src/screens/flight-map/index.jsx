
import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";
import MapView, {Marker } from 'react-native-maps';





const FlightMap = ({route}) => {
    const {flightNumber,latitude,longitude,altitude} = route.params;
    

    return (
        <View style={styles.container}>
           <MapView 
            
        
            initialRegion={{latitude, longitude, latitudeDelta: 0.001, longitudeDelta:0.01}}
            provider="google" style={styles.map}>
                <Marker  coordinate={{latitude, longitude}}/>
                
            </MapView>
            
        </View>
    )
}

export default FlightMap;