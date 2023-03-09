import React, { useState } from "react";
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { FLIGHT_LABS_API_KEY } from "../../constants/flight_api";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FlightNoInfo, FlightInfo } from "../../components";


const SearchFlight = ({navigation}) => {
    // const userMail = useSelector((state) => state.auth.email);
    const [enteredValue,setEnteredValue] = useState("");
    const [flightStatus, setFlightStatus] = useState(null);

    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^a-zA-Z0-9]/g, ''));
      };


      function getFlightStatus(enteredValue) {
        Keyboard.dismiss();
        
        if(enteredValue.length === 0)
            return null;
          

        
        const apiKey = FLIGHT_LABS_API_KEY;
        
    
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
        enabled='true'>
      <LinearGradient  colors={[  colors.darkblue, colors.white ]} style={{flex: 1}}>
        
        <View style={styles.container}>

            <View style={styles.containerSearch}>
                
                <TextInput 
                style={styles.input} 
                placeholder="Example: AZ681, BA267 ..."
                
                autoCapitalize="characters"
                keyboardAppearance="light"
                value={enteredValue}
                onChangeText={onHandlerChange}
                />

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
        
            
            
            

            
             {flightStatus && (
              <View style={{marginTop: 75}}>
                <FlightInfo 
                arrival={flightStatus.data[0].arrival.iataCode}
                departure={flightStatus.data[0].departure.iataCode}
                status={flightStatus.data[0].status}
                flightNumber={flightStatus.data[0].flight.iataNumber}
                />

                <TouchableHighlight underlayColor={colors.lightRedFides}  
                  activeOpacity={0.9}  style={styles.buttonMapContainer}
                  onPress={() => navigation.navigate('FlightMap', {
                    flightNumber: flightStatus.data[0].flight.iataNumber,
                    latitude: flightStatus.data[0].geography.latitude,
                    longitude: flightStatus.data[0].geography.longitude,
                    altitude: flightStatus.data[0].geography.altitude,
                  })}>
                  <Text style={styles.buttonMapText}>LOCATE ON MAP</Text>
                </TouchableHighlight> 
              </View>
            )}
            



        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
        
        
    );
};

export default SearchFlight;