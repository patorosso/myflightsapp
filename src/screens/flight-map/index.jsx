import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";
import MapView, { Polyline, Marker } from 'react-native-maps';





const FlightMap = ({route}) => {
    const {flightNumber,latitude,longitude,altitude} = route.params;
    

    return (
        <View style={styles.container}>
           <MapView 
            
        
            initialRegion={{latitude, longitude, latitudeDelta: 0.001, longitudeDelta:0.01}}
            provider="google" style={styles.map}>
                <Marker  coordinate={{latitude, longitude}}>
                   
                    </Marker>
                
            </MapView>
            
        </View>
    )
}

export default FlightMap;

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