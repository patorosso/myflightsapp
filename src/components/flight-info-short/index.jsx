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
    <TouchableOpacity onPress={() => {}}>
    <View style={styles.containerInfo}>
                  <View style={styles.containerFirstFlightInfo}>
                        <View style={styles.shadowContainer}>
                          <View style={styles.contentContainer}>

                            
                              <View style={styles.header}>
                                <Text style={styles.headerLeft}>{dep_iata}</Text>
                                <Text style={styles.headerMid}>{flight_iata}</Text>
                                <Text style={styles.headerRight}>{arr_iata}</Text>
                              </View>
                              <Text>Searched: {time}</Text>
      
                          </View>
                        </View>      
                  </View>
              </View>
    </TouchableOpacity>
  );
};

export default FlightInfoShort;
