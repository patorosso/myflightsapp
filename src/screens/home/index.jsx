import React, { useState } from "react";
import { View, Text, Button, TextInput, Keyboard, KeyboardAvoidingView } from "react-native";
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
      <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
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

            <View style={styles.containerFlightInfo}>
                  <View style={styles.shadowContainer}>
                    <View style={styles.contentContainer}>
                      <Text>Flight Number: </Text>
                      <Text>Status: </Text>
                      <Text>Departure Airport: </Text>
                      <Text>Arrival Airport: </Text>
            </View>
            </View>      
            </View>
            
        </View>
        </KeyboardAvoidingView>
        
    );
};

export default Home;