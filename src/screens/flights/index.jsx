import { SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import { FlightItem } from '../../components';
import { selectFlight } from '../../store/actions';

const Flights = ({ navigation }) => {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flight.flights);
  

  const onSelected = (item) => {
    dispatch(selectFlight(item.id));
    navigation.navigate('FlightDetail', {
      title: item.title,
      airports: item.airports,
      arrival: item.arrival,
    });
  };

  const renderItem = ({ item }) => <FlightItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();

  

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flights}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
    </SafeAreaView>
  );
};

export default Flights;