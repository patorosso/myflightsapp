import React, { useState } from "react";
import { View, Text, TextInput, Keyboard, KeyboardAvoidingView, TouchableHighlight, ActivityIndicator, Alert } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { AIR_LABS_API_KEY,AIRPORT_DB_TOKEN} from "../../constants/flight_api";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { CustomModal, FlightInfo } from "../../components";
import { useDispatch } from 'react-redux';
import { selectFlight } from "../../store/actions";


const SearchFlight = ({navigation}) => {
    const dispatch = useDispatch();
    
    
    const [enteredValue,setEnteredValue] = useState("");
    const [flightStatus, setFlightStatus] = useState(null);
    const [arrivalData,setArrivalData] = useState(null);
    const [departureData,setDepartureData] = useState(null);
    const [loading, setLoading] = useState(false);

    const onHandlerLocate = async () => {
      dispatch(selectFlight(flightStatus.response.flight_iata));

      if(arrivalData && departureData) {
        navigation.navigate('FlightMap', {
          flightNumber: flightStatus.response.flight_iata,
          latitude: flightStatus.response.lat,
          longitude: flightStatus.response.lng,
          altitude: flightStatus.response.alt,
          arrivalIata: flightStatus.response.arr_iata,
          departureIata: flightStatus.response.dep_iata,
          arrivalIcao: flightStatus.response.arr_icao,
          departureIcao: flightStatus.response.dep_icao,
          status: flightStatus.response.status,
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

    async function searchFlightFunction(enteredValue){
      
      
        if(enteredValue.length === 0)
          {
            Alert.alert("Alert: empty search.","\nPlease enter a flight number. \n\nExample: AZ681, BA267 ...");
            return ;
          }
      Keyboard.dismiss();
      setLoading(true);
      try {
        await getFlightStatus(enteredValue);
      } catch (error) {
        console.error(error);
      }
      
      //waits for flightStatus to update, otherwise i wouldnt get access to the data
      let intervalId = setInterval(() => {
        if (flightStatus !== null) {
          clearInterval(intervalId);
        }
      }, 5000);

      
        
      
      
      try {
        await getAirportInfo(flightStatus.response.arr_icao, 'arrival');
        await getAirportInfo(flightStatus.response.dep_icao,'departure');
      } catch (error) {
        console.error(error);
      }finally {
        setLoading(false);
      }
    }

 
      //AirLabs API
      async function getFlightStatus(enteredValue) {
        const apiKey = AIR_LABS_API_KEY;
        try {
          const response = await fetch(`https://airlabs.co/api/v9/flight?flight_iata=${enteredValue}&api_key=${apiKey}`, {
            headers: {
              'Authorization': `Bearer ${apiKey}`
            },
          });
        const data = await response.json();
        console.log(data);
        setFlightStatus(data);
          }
          catch (error) {
            console.error(error);
          }
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
                onPress={() => searchFlightFunction(enteredValue)}
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

            {loading && (
              <View style={{marginTop: 175}}>
                <ActivityIndicator size="large" color={colors.black}/>
              </View>
            )}
        

            {flightStatus && !loading  && (
              <>
                <View style={{marginTop: 175}}>
                  <FlightInfo 
                  arrival={flightStatus.response.arr_iata}
                  departure={flightStatus.response.dep_iata}
                  status={flightStatus.response.status}
                  departureRegion='Buenos Aires' arrivalRegion='Roma'
                  />
                </View>


                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight:27}}>
                  <TouchableHighlight underlayColor={colors.lightRedFides}  
                        activeOpacity={0.9}  style={styles.buttonMapContainer}
                        onPress={() => onHandlerLocate()}>
                        <Text style={styles.buttonMapText}>LOCATE ON MAP</Text>
                  </TouchableHighlight> 
                

                </View>
              </>
            )} 

        </View>
      </LinearGradient>
    </KeyboardAvoidingView>
        
        
    );
};

export default SearchFlight;