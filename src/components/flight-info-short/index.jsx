import { View, Text} from 'react-native';
import { styles } from './styles';

const FlightInfoShort = ({
    coords,
    flightNumber,
    status,
    departure,
    arrival,
    departureRegion,
    arrivalRegion,
    detailedView,


}) => {
  

  return (
    <View style={styles.containerInfo}>
                  <View style={styles.containerFirstFlightInfo}>
                        <View style={styles.shadowContainer}>
                          <View style={styles.contentContainer}>
                            
                            <View style={styles.header}>
                              <Text style={styles.headerLeft}>---</Text>
                              <Text style={styles.headerMid}>unknown</Text>
                              <Text style={styles.headerRight}>---</Text>
                            </View>
                            <Text>LAT: {coords} </Text>
                          </View>
                        </View>      
                  </View>
              </View>
  );
};

export default FlightInfoShort;
