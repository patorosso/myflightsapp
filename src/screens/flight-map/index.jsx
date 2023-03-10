import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import MapView, {Marker, Polyline } from 'react-native-maps';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { FlightInfo } from "../../components";
import { useLayoutEffect, useState } from "react";







const FlightMap = ({route, navigation}) => {

    const {flightNumber,latitude,longitude,altitude,arrival,departure,status} = route.params;
    const [flightInfoBox, setFlightInfoBox] = useState(false);

    

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={onHandlerInfo}>
                    <Ionicons name="information-circle-outline" size={36} color={colors.primary} />
                </TouchableOpacity>
            )
        })
    });

    const onHandlerInfo = () => {
        setFlightInfoBox(!flightInfoBox);
      };

    const latFCO = 41.771530;
    const longFCO = 12.230000;

    function getRotation() {
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
      
        return roundedRotation;
      }
    
    
    return (
        <View style={styles.container}>
           <MapView 
            rotateEnabled={false}
            initialRegion={{latitude, longitude, latitudeDelta: 86,longitudeDelta: 86}}
            provider="google" style={styles.map}>

                <Marker coordinate={{latitude: -34.812931,longitude: -58.541489 }} />
                <Marker  pinColor='navy'  coordinate={{latitude: 41.771530,longitude: 12.230000 }}>
                </Marker>
                <Marker  rotation= {getRotation()} coordinate={{latitude, longitude}}   imageStyle={{ width: 40, height: 40 }}>
                    <View>
                        <MaterialIcons 
                        name={'airplanemode-active'}
                        size={63}
                        color={colors.red}
                        />
                    </View>
                </Marker> 
                
                
            </MapView>
            {flightInfoBox && (
                <View style={{flex: 1,justifyContent: 'flex-end',marginBottom:30}}>
                <FlightInfo 
                flightNumber={flightNumber}
                arrival={arrival}
                departure={departure}
                status={status}
                />
            </View>
            )}
            
        </View>
    )
}

export default FlightMap;