import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import MapView, {Marker} from 'react-native-maps';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 
import { FlightInfo } from "../../components";
import { useLayoutEffect, useState } from "react";
import { getRotation } from "../../functions";






const FlightMap = ({route, navigation}) => {

    const {flightNumber,latitude,longitude,altitude,arrival,departure,status} = route.params;
    const [flightInfoBox, setFlightInfoBox] = useState(true);
    const [latitudeDelta, setLatitudeDelta] = useState(4);

    const [region, setRegion] = useState({
        latitude: latitude,
        longitude: longitude +1.5, //to put the icon on the middle of the screen
        latitudeDelta: 34,
        longitudeDelta: 34,
      });


      const onHandleMoveMap = (latitude, longitude) => {
        const newLatitudeDelta = latitudeDelta + 0.00000001; //doing this so everytime i click on the button its a "newer" number haha. pato was here. srry for anyone reading.
        const newRegion = {
            latitude: latitude ,
            longitude: longitude + 1.5, //to put the icon on the middle of the screen
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
    



    const latFCO = 41.771530;
    const longFCO = 12.230000;

    
      
    
    
    return (
        <View style={styles.container}>
           <MapView 
            rotateEnabled={false}
            initialRegion={region}
            region={region}
            toolbarEnabled={false} // removes google maps button
            loadingEnabled={true}
            provider="google" style={styles.map}>

                <Marker coordinate={{latitude: -34.812931,longitude: -58.541489 }} />
                <Marker  pinColor='navy'  coordinate={{latitude: 41.771530,longitude: 12.230000 }}/>
                <Marker  rotation= {getRotation(latitude,longitude,latFCO,longFCO)} coordinate={{latitude, longitude}}   imageStyle={{ width: 40, height: 40 }}>
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
                        <TouchableOpacity style={styles.flightNumberContainer} onPress={() => onHandleMoveMap(latitude,longitude)}>
                                <Text style={styles.flightNumberText}>{flightNumber}</Text>
                        </TouchableOpacity>
                            
                        </View>
                    </View>
                    
                    
                    <FlightInfo 
                   
                    arrival={arrival}
                    departure={departure}
                    status={status}
                    />
            </View>
            )}
            
        </View>
    )
}

export default FlightMap;