import React, { useState } from "react";
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { FLIGHT_LABS_API_KEY } from "../../constants/flight_api";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FlightNoInfo, FlightInfo } from "../../components";
import { useDispatch } from 'react-redux';
import {  } from '../../store/actions';
import { selectFlight } from "../../store/actions";

const SearchFlight = ({navigation}) => {
     const dispatch = useDispatch();
    
    // const userMail = useSelector((state) => state.auth.email);
    const [enteredValue,setEnteredValue] = useState("");
    const [flightStatus, setFlightStatus] = useState(null);

    const onHandlerLocate = () => {
        navigation.navigate('FlightMap', {
        flightNumber: 'AZ681',
        latitude: -29.0105,
        longitude: -49.6868,
        altitude: 123,
        arrival: 'FCO',
        departure: 'EZE',
      })

      dispatch(selectFlight('AZ681'));
    };



    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^a-zA-Z0-9]/g, ''));
      };


      function getFlightStatus(enteredValue) {
        Keyboard.dismiss();

        if(enteredValue.length === 0)
          {
      
            return null;
          }

        
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
        
            
            
            

            
              <View style={{marginTop: 75}}>
                
                <TouchableHighlight underlayColor={colors.lightRedFides}  
                  activeOpacity={0.9}  style={styles.buttonMapContainer}
                  onPress={
                  onHandlerLocate
                  }>
                  <Text style={styles.buttonMapText}>LOCATE ON MAP</Text>
                </TouchableHighlight> 
            </View>
            



        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
        
        
    );
};

export default SearchFlight;