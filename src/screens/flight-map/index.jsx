
import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";
import MapView, {Marker, Polyline } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons'; 





const FlightMap = ({route}) => {
    const {flightNumber,latitude,longitude,altitude} = route.params;

    function getRotation() {
        const latFCO = 41.771530;
        const longFCO = 12.230000;
      
        // helper function to convert degrees to radians
        function toRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      
        // helper function to convert radians to degrees
        function toDegrees(radians) {
          return radians * 180 / Math.PI;
        }
      
        const radLat1 = toRadians(latitude);
        const radLong1 = toRadians(longitude);
        const radLat2 = toRadians(latFCO);
        const radLong2 = toRadians(longFCO);
      
        const deltaLong = radLong2 - radLong1;
      
        const y = Math.sin(deltaLong) * Math.cos(radLat2);
        const x = Math.cos(radLat1) * Math.sin(radLat2) - Math.sin(radLat1) * Math.cos(radLat2) * Math.cos(deltaLong);
        const bearing = toDegrees(Math.atan2(y, x));
      
        const rotation = 90 - bearing;
        
        // round the rotation value to 2 decimal places
        const roundedRotation = parseFloat(rotation.toFixed(2));
      
        console.warn(roundedRotation);
        return roundedRotation;
      }
    
    
    return (
        <View style={styles.container}>
           <MapView 
            rotateEnabled={false}
            initialRegion={{latitude, longitude, latitudeDelta: 67,longitudeDelta: 67}}
            provider="google" style={styles.map}>
                <Marker  coordinate={{latitude: -34.812931,longitude: -58.541489 }} />
                <Marker  rotation= {getRotation()} coordinate={{latitude, longitude}}   imageStyle={{ width: 40, height: 40 }}>
                    <View>
                        <MaterialIcons 
                        name={'airplanemode-active'}
                        size={63}
                        color={colors.red}
                        />
                    </View>
                </Marker> 
                <Polyline
                    coordinates={[
                        { latitude: -34.812931, longitude: -58.541489 },
                        
                        { latitude, longitude}
                        
                    ]}
                    strokeColor={colors.darkblue} // fallback for when `strokeColors` is not supported by the map-provider
                    
                    strokeWidth={6}
                />
                
            </MapView>
        </View>
    )
}

export default FlightMap;