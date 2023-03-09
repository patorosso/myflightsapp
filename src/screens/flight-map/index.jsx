import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";
import { LeafletView } from 'react-native-leaflet-maps';



const FlightMap = ({route}) => {
    const {flightNumber,latitude,longitude,altitude} = route.params;
    const location = {
        latitude: 37.78825, // default latitude value
        longitude: -122.4324, // default longitude value
    };

    return (
        <View style={styles.container}>
            
            <LeafletView
            center={location}
            zoom={13}
            style={{ flex: 1 }}
            />
       
           
                
            
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