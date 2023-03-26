import React , {useState} from "react";
import { View , Button, FlatList, Text, KeyboardAvoidingView, TextInput,TouchableHighlight, Keyboard, Alert,ActivityIndicator} from "react-native";

import { styles } from "./styles";
import { colors } from "../../constants";
import { SelectList } from 'react-native-dropdown-select-list';
import { AIR_LABS_API_KEY } from "../../constants/flight_api_keys";
import ScheduleItem from "../../components/schedule-item";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";


const Schedule = () => {
    const [arrData,setArrData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [enteredValue,setEnteredValue] = useState("");
       
    async function onHandleAirportSchedule(enteredValue) {
        if(enteredValue.length === 0)
          {
            Alert.alert("Alert: empty search.","\nPlease enter an IATA airport code. \n\nExample: JFK, PEK, HND, FRA, DXB ...");
            return ;
          }
        Keyboard.dismiss();
        setLoading(true);
        const apiKey = AIR_LABS_API_KEY;
        try {
            const response = await fetch(`https://airlabs.co/api/v9/schedules?dep_iata=${enteredValue}&api_key=${apiKey}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
        });
        const data = await response.json();
        console.log(data);
        
        if(data.error)
        {
            Alert.alert("Error","Couldn't find the airport. Please check again if it's the right IATA airport code or search another one.");
            return ;
        }
        setArrData(data);
        }
        catch (error) {
            console.log("error with schedule info.");
            console.error(error);
            }
        finally {
            setLoading(false);   
        }
    }

    const handleNextPage = () => {
        setPage(page + 1);
      }

    const renderItem = ({ item }) => (
        <ScheduleItem flightNumber={item.flight_iata} status={item.status}  time={'19:40'} destination={item.arr_iata} />
      );
    
      const onHandlerChange = (text) => {
        setEnteredValue(text.replace(/[^a-zA-Z]/g, ''));
    };



    return (

        <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled='true'>
        <View style={styles.container}>
            <LinearGradient  colors={[  colors.darkblue, colors.white ]} style={{flex: 1}}>
            <View style={styles.containerSearch}>
                <TextInput 
                style={styles.input} 
                placeholder="Example: EZE, LHR, FCO, MAD"
                autoCapitalize="characters"
                keyboardAppearance="light"
                value={enteredValue}
                onChangeText={onHandlerChange}
                />
                <TouchableHighlight
                underlayColor={colors.lightblue}  
                activeOpacity={0.9} 
                onPress={() => onHandleAirportSchedule(enteredValue)}
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

            {(arrData.length != 0 && !loading  &&
            <View style={styles.listContainer}>

                <View style={styles.topBar}>
                    <View style={styles.topBarContent}>
                        <Text style={{width: 60,fontFamily:'Nunito-Regular'}}>Time</Text>
                        <Text style={{width: 75,fontFamily:'Nunito-Regular'}}>Flight</Text>
                        <Text style={{width: 60,fontFamily:'Nunito-Regular'}}>Dest.</Text>
                        <Text style={{width: 75,fontFamily:'Nunito-Regular'}}>Status</Text>
                    </View>
                </View>

                <View style={styles.flatList}>
                    <FlatList
                    data={arrData.response && arrData.response.slice(0, page * 10)}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={handleNextPage}
                    onEndReachedThreshold={0.5}
                    pagingEnabled={true}
                    />
                </View>
            </View>
            )}
            </LinearGradient>
        </View>
        </KeyboardAvoidingView>
    );
} 
export default Schedule;


