import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";

const Home = ({ navigation }) => {
    // const userMail = useSelector((state) => state.auth.email);
    const [enteredValue,setEnteredValue] = useState("");

    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^a-zA-Z0-9]/g, ''));
      };

    const isDisabled = enteredValue.length === 0;

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
        <View style={styles.container}>
            {/* <Text style={styles.textUser}>{userMail}</Text>  */}
            <TextInput 
            style={styles.input} 
            placeholder="Example: AZ681, BA267 ..."
            autoCapitalize="characters"
            keyboardAppearance="light"
            value={enteredValue}
            onChangeText={onHandlerChange}
            />
            {/* <Button title="See my flights"
            color={colors.primary}
            onPress={() => navigation.navigate('Flights')}
             /> */}
            <Button title="Get Flight Status" onPress={getFlightStatus} color={colors.primary} disabled={isDisabled}/>
        
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
};

export default Home;