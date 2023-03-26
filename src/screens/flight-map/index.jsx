import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import MapView, {Marker} from 'react-native-maps';
import { MaterialIcons, Ionicons ,FontAwesome5} from '@expo/vector-icons'; 
import { FlightInfo } from "../../components";
import { useLayoutEffect, useState } from "react";




const FlightMap = ({route, navigation}) => {

    const {flightNumber,latitude,longitude,altitude,arrivalIata,
           departureIata,arrivalIcao,departureIcao,status,direction,arrivalLatitude,
           arrivalLongitude,departureLatitude, departureLongitude,arrivalCountry, departureCountry,arrivalGate ,
            departureGate, arrivalTerminal,departureTerminal,arrivalRegion,departureRegion,arrivalTime,departureTime,
            } = route.params;
    const [flightInfoBox, setFlightInfoBox] = useState(true);
    const [latitudeDelta, setLatitudeDelta] = useState(34); // before initial 4

    const [region, setRegion] = useState({
        latitude: latitude -8,
        longitude: longitude +1.5, //to put the icon on the middle of the screen
        latitudeDelta: 34,
        longitudeDelta: 34,
      });


    const onHandleMoveMap = (latitude, longitude) => {
        //doing this so everytime i click on the button its a "newer" number haha.
        //otherwise, if it's the same number, it wont change the map.
        const newLatitudeDelta = latitudeDelta + 0.00000001; 
        const newRegion = {
            latitude: latitude ,
            longitude: longitude,
            latitudeDelta: newLatitudeDelta,
            longitudeDelta: 34,
        };
        setRegion(newRegion);
        setLatitudeDelta(newLatitudeDelta);
    }

    //top bar icon to display flight info
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                    <TouchableOpacity onPress={onHandlerInfo}>
                        <Ionicons name="information-circle-outline" size={36} color={colors.primary} />
                    </TouchableOpacity>
            )
        })
    });

    const onHandlerInfo = () => {
        setFlightInfoBox(!flightInfoBox);
      };
    
    return (
        <View style={styles.container}>
            
           <MapView 
            rotateEnabled={false}
            initialRegion={region}
            region={region}
            toolbarEnabled={false} // removes google maps button
            loadingEnabled={true}
            provider="google" style={styles.map}>
                
                <Marker coordinate={{latitude: departureLatitude ,longitude: departureLongitude}}/> 
                <Marker  pinColor='navy' coordinate={{latitude: arrivalLatitude,longitude: arrivalLongitude}}/>
                <Marker  rotation= {direction} coordinate={{latitude, longitude}} imageStyle={{ width: 40, height: 40 }}>
                    <View>
                        <MaterialIcons 
                        name={'airplanemode-active'}
                        size={63}
                        color={colors.red}
                        />
                    </View>
                </Marker> 
            </MapView>
            
            {flightInfoBox && (
                <View style={{flex: 1,marginBottom:30}}>

                    <View style={{flex:1,justifyContent:'flex-end'}}> 
                        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>

                            <TouchableOpacity style={styles.flightAirportContainer} onPress={() => onHandleMoveMap(departureLatitude,departureLongitude)}>
                                <FontAwesome5 name="plane-departure" size={17} color="white" style={{padding:11}}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.flightNumberContainer} onPress={() => onHandleMoveMap(latitude,longitude+1.5)}>  
                            {/* +1.5 to put the icon on the middle of the screen */}
                                    <Text style={styles.flightNumberText}>{flightNumber}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.flightAirportContainer} onPress={() => onHandleMoveMap(arrivalLatitude,arrivalLongitude)}>
                                <FontAwesome5 name="plane-arrival" size={17} color="white" style={{padding:11}}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    
                    <FlightInfo              
                    arrival={arrivalIata}
                    departure={departureIata}
                    status={status}
                    arrivalCountry={arrivalCountry}
                    departureCountry={departureCountry}
                    arrivalRegion={arrivalRegion}
                    departureRegion={departureRegion}
                    arrivalGate={arrivalGate}
                    departureGate={departureGate}
                    arrivalTerminal={arrivalTerminal}
                    departureTerminal={departureTerminal}
                    arrivalTime={arrivalTime}
                    departureTime={departureTime}
                    
            
                    />

            </View>
            )}
            
        </View>
    )
}

export default FlightMap;