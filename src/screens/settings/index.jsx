import { View, Text } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../constants";
import { AIRPORT_DB_TOKEN } from "../../constants/flight_api";
import { useEffect, useState } from "react";


const Settings = () => {
    const [arrivalData,setArrivalData] = useState(null);
    const [departureData,setDepartureData] = useState(null);

    useEffect(() => {
        getAirportInfo('LIRF', "arrival");
        getAirportInfo('SAEZ', "departure");
      }, []);

    function getAirportInfo(airportIcao,detail) {
        
        const apiToken = AIRPORT_DB_TOKEN;
        fetch(`https://airportdb.io/api/v1/airport/${airportIcao}?apiToken=${apiToken}`, {
            headers: {
                'Authorization': `Bearer ${apiToken}`
              },
              
            })
            .then(response => response.json())
            .then(data => {
            console.log(data);
            if(detail === 'arrival')
                setArrivalData(data);
            else setDepartureData(data);    
            })
            .catch(error => console.error(error));
        
    }
    
    
   

    return (
        <View style={styles.container}>
        { arrivalData && departureData && (
            
            <>
            
            <Text>latitude: {departureData.latitude_deg}, longitude: {departureData.longitude_deg}</Text>
            <Text>latitude: {arrivalData.latitude_deg}, longitude: {arrivalData.longitude_deg}</Text>
            </>
        )}
        </View>
    )
}

export default Settings;