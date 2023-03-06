import React from "react";
import { View, Text, Button } from "react-native";
import { useState } from "react";
import {  FLIGHT_API_KEY } from "../../constants/flight_api";
import { LinearGradient } from "expo-linear-gradient";


const Settings = () => {
    const [flightStatus, setFlightStatus] = useState(null);

    function getFlightStatus() {
      const apiKey = FLIGHT_API_KEY;
      const flightNumber = 'AZ681';
  
      fetch(`https://app.goflightlabs.com/flights?access_key=${apiKey}&flightIata=${flightNumber}`, {
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
      <View style={{flex:1}}>
        
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