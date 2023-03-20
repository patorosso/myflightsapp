import { View, Text} from 'react-native';
import { styles } from './styles';
import { getStatusColor } from '../../functions';

const FlightInfo = ({
  flightNumber,
  status,
  departure,
  arrival,
  departureRegion,
  arrivalRegion,
  departureTime,
  arrivalTime,
  departureCountry,
  arrivalCountry,
  departureTerminal,
  arrivalTerminal,
  departureGate,
  arrivalGate,



}) => {

  const color = getStatusColor(status);
  return (
    <View style={styles.containerInfo}>
                  <View style={styles.containerFirstFlightInfo}>
                        <View style={styles.shadowContainer}>
                          <View style={styles.contentContainer}>
                            
                            <View style={styles.header}>
                              <Text style={styles.headerLeft}>{departure}</Text>
                              <Text style={{flex:1,textAlign: 'center',fontFamily: 'Nunito-Medium',fontSize: 20,borderBottomWidth: 2, borderBottomColor: color, alignSelf: 'center', color: color}}>{status}</Text>
                              <Text style={styles.headerRight}>{arrival}</Text>
                            </View>
                            
                            <View style={styles.body}>
                              <View style={styles.leftRegion}>
                                <Text style={styles.depRegion}>{departureRegion}, {departureCountry}</Text>
                                <Text style={styles.departureTime}>{departureTime}</Text>
                                <Text style={styles.departureTerminal}>Terminal: {departureTerminal ? departureTerminal : '-' }</Text>
                                <Text style={styles.departureGate}>Gate: {departureGate ? departureGate : '-' }</Text>
                              </View>
                              
                              <View style={styles.rightRegion}>
                                <Text style={styles.arrRegion}>{arrivalRegion}, {arrivalCountry}</Text>
                                <Text style={styles.arrivalTime}>{arrivalTime}</Text>
                                <Text style={styles.arrivalTerminal}>Terminal: {arrivalTerminal ? arrivalTerminal : '-' }</Text>
                                <Text style={styles.arrivalGate}>Gate: {arrivalGate ? arrivalGate : '-' }</Text>
                                
                              </View>

                            </View>
                          </View>
                        </View>      
                  </View>
              </View>
  );
};

export default FlightInfo;
