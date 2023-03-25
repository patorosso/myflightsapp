import React , {useState} from "react";
import { View , Button, FlatList, Text} from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { SelectList } from 'react-native-dropdown-select-list';
import { AIR_LABS_API_KEY } from "../../constants/flight_api";
import ScheduleItem from "../../components/schedule-item";

const Schedule = () => {
    const [arrData,setArrData] = useState([]);
       
    async function onHandleAirportSchedule() {
        const apiKey = AIR_LABS_API_KEY;
        try {
            const response = await fetch(`https://airlabs.co/api/v9/schedules?dep_iata=SIN&api_key=${apiKey}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            },
        });
        const data = await response.json();
        console.log(data);
        
        if(data.error)
        {
            Alert.alert("Error","Couldn't find the flight. Verify if it's the correct IATA code. If the problem doesn't go away please try again later or search other flights.");
            return ;
        }
        setArrData(data);
        }
        catch (error) {
            console.log("error with flight info.");
            console.error(error);
            }
    }

    const renderItem = ({ item }) => (
        
        // Render your list item here
        <ScheduleItem flightNumber={item.flight_iata} status={item.status} />
        
      );
      
    


    return (
        <View style={styles.container}>

            <View style={styles.buttonContainer}>
                <Button color={colors.red} onPress={onHandleAirportSchedule} title='get schedule'/>
            </View>

            <View style={styles.topBar}>
                <Text style={{width: 60}}>Time</Text>
                <Text style={{width: 60}}>Carrier</Text>
                <Text style={{width: 60}}>Flight</Text>
                <Text style={{width: 90}}>Destination</Text>
                <Text style={{width: 60}}>Status</Text>
            </View>

            <ScheduleItem flightNumber={'AZ681'} status={'delayed'} destination={'FCO'} company={'AA'} time={'18:50'} />

            {(arrData &&
            <FlatList
            data={arrData.response}
            renderItem={renderItem}
            keyExtractor={item => item.flight_iata}
            />
        )}
        

        </View>
    );
} 
export default Schedule;


