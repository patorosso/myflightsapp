import React, { useState } from "react";
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { FLIGHT_API_KEY } from "../../constants/flight_api";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";


const SearchFlight = () => {
    // const userMail = useSelector((state) => state.auth.email);
    const [enteredValue,setEnteredValue] = useState("");
    //const isDisabled = enteredValue.length === 0;
    const [flightStatus, setFlightStatus] = useState(null);

    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^a-zA-Z0-9]/g, ''));
      };


      function getFlightStatus(enteredValue) {

        if(enteredValue.length === 0)
          {
            return null;
          }

        Keyboard.dismiss();
        const apiKey = FLIGHT_API_KEY;
        
    
        fetch(`https://app.goflightlabs.com/flights-schedules?access_key=${apiKey}&flightIata=${enteredValue}`, {
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
        enabled='true'>
      <LinearGradient  colors={[  colors.darkblue, colors.white ]} style={{flex: 1}}>
        
        <View style={styles.container}>
            <View style={styles.containerSearch}>
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

                <TouchableHighlight
                underlayColor={colors.lightblue}  
                activeOpacity={0.9} 
                onPress={() => getFlightStatus(enteredValue)}
                style={styles.searchIconContainer} 
                >
                  <Ionicons
                    name={'search'}
                    size={30}
                    color={colors.white}
                    style={styles.icon}
                  />
                </TouchableHighlight>
            </View>
        

             <View style={styles.containerInfo}>
                  <View style={styles.containerFirstFlightInfo}>
                        <View style={styles.shadowContainer}>
                          <View style={styles.contentContainer}>
                            <View style={styles.header}>
                              <Text style={styles.headerLeft}>EZE</Text>
                              <Text style={styles.headerMid}>on-route</Text>
                              <Text style={styles.headerRight}>FCO</Text>
                            </View>
                            <Text>Flight Number: </Text>
                            <Text>Status: </Text>
                            <Text>Departure Airport: </Text>
                            <Text>Arrival Airport: </Text>
                          </View>
                        </View>      
                  </View>
              </View>

        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
        
        
    );
};

export default SearchFlight;