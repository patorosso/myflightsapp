import React, { useState } from "react";
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { FLIGHT_LABS_API_KEY,AIRPORT_DB_TOKEN} from "../../constants/flight_api";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { FlightNoInfo, FlightInfo } from "../../components";
import { useDispatch } from 'react-redux';
import {  } from '../../store/actions';
import { selectFlight } from "../../store/actions";


const SearchFlight = ({navigation}) => {
     const dispatch = useDispatch();
    
    
    const [enteredValue,setEnteredValue] = useState("");
    const [flightStatus, setFlightStatus] = useState(null);
    const [arrivalData,setArrivalData] = useState(null);
    const [departureData,setDepartureData] = useState(null);

    const onHandlerLocate = async () => {
      //controlar null
      const arrivalPromise = getAirportInfo(flightStatus.data[0].arrival.icaoCode, 'arrival');
      const departurePromise = getAirportInfo(flightStatus.data[0].departure.icaoCode,'departure');
      await Promise.all([arrivalPromise, departurePromise]);
    
      dispatch(selectFlight(flightStatus.data[0].flight.iataNumber));
    
      if(arrivalData && departureData) {
        navigation.navigate('FlightMap', {
          flightNumber: flightStatus.data[0].flight.iataNumber,
          latitude: flightStatus.data[0].geography.latitude,
          longitude: flightStatus.data[0].geography.longitude,
          altitude: flightStatus.data[0].geography.altitude,
          arrivalIata: flightStatus.data[0].arrival.iataCode,
          departureIata: flightStatus.data[0].departure.iataCode,
          arrivalIcao: flightStatus.data[0].arrival.icaoCode,
          departureIcao: flightStatus.data[0].departure.icaoCode,
          status: flightStatus.data[0].status,
          arrivalLatitude: arrivalData.latitude_deg,
          arrivalLongitude: arrivalData.longitude_deg,
          departureLatitude: departureData.latitude_deg,
          departureLongitude: departureData.longitude_deg,
        });
      }
    };



    const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^a-zA-Z0-9]/g, ''));
      };
 
      //FlightLabs API
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

      //airportDB API
      async function getAirportInfo(airportIcao, detail) {
        const apiToken = AIRPORT_DB_TOKEN;
        try {
          const response = await fetch(`https://airportdb.io/api/v1/airport/${airportIcao}?apiToken=${apiToken}`, {
            headers: {
              'Authorization': `Bearer ${apiToken}`
            },
          });
          const data = await response.json();
          console.log(data);
          if (detail === 'arrival') {
            setArrivalData(data);
          } else {
            setDepartureData(data);
          }
        } catch (error) {
          console.error(error);
        }
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
        
            <View style={{marginTop: 175}}>
              <FlightInfo arrival='FCO' departure='EZE'
              status='en-route' departureRegion='Buenos Aires' arrivalRegion='Roma'
              />
            </View>
            
            

            
            {/* {flightStatus && (
              <View style={{marginTop: 175}}>
                <FlightInfo 
                arrival={flightStatus.data[0].arrival.iataCode}
                departure={flightStatus.data[0].departure.iataCode}
                status={flightStatus.data[0].status}
                flightNumber={flightStatus.data[0].flight.iataNumber}
                />

                <TouchableHighlight underlayColor={colors.lightRedFides}  
                  activeOpacity={0.9}  style={styles.buttonMapContainer}
                  onPress={() => onHandlerLocate()}>
                  <Text style={styles.buttonMapText}>LOCATE ON MAP</Text>
                </TouchableHighlight> 
              </View>
            )} */}
            



        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
        
        
    );
};

export default SearchFlight;