import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { colors } from '../../constants';


const FlightInfoShort = ({
    flight_iata,
    dep_iata,
    arr_iata,
    time,
    status,
    departureRegion,
    arrivalRegion,
   

}) => {
  

  return (
    <View style={styles.containerInfo}>
                  <View style={styles.containerFirstFlightInfo}>
                        <View style={styles.shadowContainer}>
                          <View style={styles.contentContainer}>

                            <View style={{width: '80%'}}>
                              <View style={styles.header}>
                                <Text style={styles.headerLeft}>{dep_iata}</Text>
                                <Text style={styles.headerMid}>{flight_iata}</Text>
                                <Text style={styles.headerRight}>{arr_iata}</Text>
                              </View>
                              <Text>Searched: {time}</Text>
                            </View>

                            <View style={{flex:1, marginLeft: 10, alignItems:'center', justifyContent:'center'}}> 
                              <TouchableOpacity style={{borderBottomWidth:1}}>
                                <Ionicons name="search-circle-sharp" size={33} color={colors.primary} />
                              </TouchableOpacity>

                              <TouchableOpacity style={{borderTopWidth:1}}>
                                  <MaterialIcons name="cancel" size={33} color="red" />
                              </TouchableOpacity>
                            </View>
                            
                            

                          </View>
                        </View>      
                  </View>
              </View>
  );
};

export default FlightInfoShort;
