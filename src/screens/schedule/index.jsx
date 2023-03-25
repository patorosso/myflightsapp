import React , {useState} from "react";
import { View , Button, FlatList, Text} from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants";
import { SelectList } from 'react-native-dropdown-select-list';
import { AIR_LABS_API_KEY } from "../../constants/flight_api_keys";
import ScheduleItem from "../../components/schedule-item";
import { LinearGradient } from "expo-linear-gradient";

const Schedule = () => {
    const [arrData,setArrData] = useState([]);
    const [page, setPage] = useState(1);
       
    async function onHandleAirportSchedule() {
        const apiKey = AIR_LABS_API_KEY;
        try {
            const response = await fetch(`https://airlabs.co/api/v9/schedules?dep_iata=EZE&api_key=${apiKey}`, {
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

    const handleNextPage = () => {
        setPage(page + 1);
      }

    const renderItem = ({ item }) => (
        
        <ScheduleItem flightNumber={item.flight_iata} status={item.status}  time={item.dep_actual} destination={item.arr_iata} />
      );
    
   



    return (
        <View style={styles.container}>
            <LinearGradient  colors={[  colors.darkblue, colors.white ]} style={{flex: 1}}>
            <View style={styles.buttonContainer}>
                <Button color={colors.primary} onPress={onHandleAirportSchedule} title='get schedule'/>
            </View>

            <View style={styles.listContainer}>
                
                <View style={styles.topBar}>
                    <View style={styles.topBarContent}>
                        <Text style={{width: 60,fontFamily:'Nunito-Regular'}}>Time</Text>
                        <Text style={{width: 60,fontFamily:'Nunito-Regular'}}>Flight</Text>
                        <Text style={{width: 60,fontFamily:'Nunito-Regular'}}>Dest.</Text>
                        <Text style={{width: 75,fontFamily:'Nunito-Regular'}}>Status</Text>
                    </View>
                    
                </View>

            
                <View style={styles.flatList}>
                {(arrData &&
                    <FlatList
                    data={arrData.response && arrData.response.slice(0, page * 10)}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={handleNextPage}
                    onEndReachedThreshold={0.5}
                    pagingEnabled={true}
                    />
                )}
               </View>
            </View>
            </LinearGradient>
        </View>
    );
} 
export default Schedule;


