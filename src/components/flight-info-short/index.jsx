import { View, Text} from 'react-native';
import { styles } from './styles';

const FlightInfoShort = ({
  

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
                            <Text>Flight Number: </Text>
                            <Text>Status: </Text>
                            <Text>Departure Airport: </Text>
                            <Text>Arrival Airport: </Text>
                          </View>
                        </View>      
                  </View>
              </View>
  );
};

export default FlightInfoShort;
