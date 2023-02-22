import { View, Text, TouchableHighlight } from 'react-native';

import { styles } from './styles';

const FlightItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.contentContainer} onPress={() => onSelected(item)}>
        <Text style={styles.title}>ITA AZ-681</Text>
      </TouchableHighlight>
    </View>
  );
};

export default FlightItem;
