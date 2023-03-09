import { View, Text} from 'react-native';
import { styles } from './styles';

const FlightInfo = ({
  flightNumber,
  status,
  departure,
  arrival,

}) => {
  return (
    <View style={styles.containerInfo}>
                  <View style={styles.containerFirstFlightInfo}>
                        <View style={styles.shadowContainer}>
                          <View style={styles.contentContainer}>
                            
                            <View style={styles.header}>
                              <Text style={styles.headerLeft}>{departure}</Text>
                              <Text style={styles.headerMid}>{status}</Text>
                              <Text style={styles.headerRight}>{arrival}</Text>
                            </View>
                            <Text>Flight Number:{flightNumber} </Text>
                            <Text>Status: </Text>
                            <Text>Departure Airport: </Text>
                            <Text>Arrival Airport: </Text>
                          </View>
                        </View>      
                  </View>
              </View>
  );
};

export default FlightInfo;


/* <Text>Flight Number: {flightStatus.data[0].flight.iataNumber}</Text>
<Text>Status: {flightStatus.data[0].status}</Text>
<Text>Departure Airport: {flightStatus.data[0].departure.iataCode}</Text>
<Text>Arrival Airport: {flightStatus.data[0].arrival.iataCode}</Text> */