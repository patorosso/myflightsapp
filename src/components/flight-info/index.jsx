import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

const FlightInfo = () => {
  return (
    <View style={styles.containerInfo}>
                  <View style={styles.containerFirstFlightInfo}>
                        <View style={styles.shadowContainer}>
                          <View style={styles.contentContainer}>
                            <View style={styles.header}>
                              <Text style={styles.headerLeft}>EZE</Text>
                              <Text style={styles.headerMid}>on-route</Text>
                              <Text style={styles.headerRight}>FCO</Text>
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

export default FlightInfo;
