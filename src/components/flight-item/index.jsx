import { View, Text, TouchableHighlight } from 'react-native';
import { colors } from '../../constants';
import { styles } from './styles';

const FlightItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.contentContainer} underlayColor= {colors.white} activeOpacity= {0.01} onPress={() => onSelected(item)}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default FlightItem;
