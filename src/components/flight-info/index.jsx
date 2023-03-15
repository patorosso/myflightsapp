import { View, Text} from 'react-native';
import { styles } from './styles';

const FlightInfo = ({
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
                              <Text style={styles.headerLeft}>{departure}</Text>
                              <Text style={styles.headerMid}>{status}</Text>
                              <Text style={styles.headerRight}>{arrival}</Text>
                            </View>
                            
                            <View style={styles.body}>
                              <View style={styles.leftRegion}>
                                <Text style={{ paddingRight: 27, textAlign: 'center'}}>{departureRegion}</Text>
                                
                              </View>
                              
                              <View style={styles.rightRegion}>
                                <Text style={{ paddingLeft: 27, textAlign: 'center'}}>{arrivalRegion}</Text>
                                
                              </View>

                            </View>
                          </View>
                        </View>      
                  </View>
              </View>
  );
};

export default FlightInfo;
