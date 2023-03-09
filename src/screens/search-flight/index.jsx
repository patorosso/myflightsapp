import React, { useState } from "react";
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { FLIGHT_LABS_API_KEY } from "../../constants/flight_api";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FlightNoInfo, FlightInfo } from "../../components";


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
        const apiKey = FLIGHT_LABS_API_KEY;
        
    
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
        
            
            
            

              {flightStatus?
              <View style={{marginTop: 75}}>
              <FlightInfo 
              arrival="EZE"
              departure="FCO"
              status="en-route"
              flightNumber="AZ681"
              />
              <TouchableHighlight onPress={() => {}} underlayColor={colors.lightRedFides}  
                activeOpacity={0.9}  style={styles.buttonMapContainer}>
                <Text style={styles.buttonMapText}>LOCATE ON MAP</Text>
              </TouchableHighlight> 
            </View>
            :
            <FlightNoInfo/>
              }
        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
        
        
    );
};

export default SearchFlight;