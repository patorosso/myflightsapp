import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { CustomModal } from "../../components";
import { colors } from "../../constants";
import { FLIGHT_URL, FLIGHT_API_KEY } from "../../constants/flight_api";


const Settings = () => {
    const [flightStatus, setFlightStatus] = useState(null);

    function getFlightStatus() {
      const apiKey = FLIGHT_API_KEY;
      const flightNumber = 'BA179';
  
      fetch(`https://app.goflightlabs.com/flights?access_key=${apiKey}&flightIata=BA179`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`
        },
        
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setFlightStatus(data);
      })
      .catch(error => console.error(error));
    }
  
    return (
      <View>
        <Button title="Get Flight Status" onPress={getFlightStatus} />
        
        {flightStatus && (
            
          <View>
                <Text>Flight Number: {flightStatus.data[0].flight.iataNumber}</Text>
                <Text>Status: {flightStatus.data[0].status}</Text>
                <Text>Departure Airport: {flightStatus.data[0].departure.iataCode}</Text>
                <Text>Arrival Airport: {flightStatus.data[0].arrival.iataCode}</Text>
          </View>
        )}
      </View>
    );
  }

export default Settings;