import React, { useState } from "react";
import { View, Text, Button, TextInput, Keyboard } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { FLIGHT_API_KEY } from "../../constants/flight_api";

const Home = ({ navigation }) => {
    // const userMail = useSelector((state) => state.auth.email);
    const [enteredValue,setEnteredValue] = useState("");
    const isDisabled = enteredValue.length === 0;
    const [flightStatus, setFlightStatus] = useState(null);

    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^a-zA-Z0-9]/g, ''));
      };

    




      function getFlightStatus(enteredValue) {

        Keyboard.dismiss();
        const apiKey = FLIGHT_API_KEY;
        
    
        fetch(`https://app.goflightlabs.com/flights?access_key=${apiKey}&flightIata=${enteredValue}`, {
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
            <Button title="Get Flight Status" onPress={() => getFlightStatus(enteredValue)} color={colors.primary} disabled={isDisabled}/>
        
                {flightStatus && (
            
                <View style={styles.infoContainer}>
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