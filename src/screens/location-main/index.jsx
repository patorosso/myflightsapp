import { Button, View } from 'react-native';
import { styles } from './styles';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { colors } from '../../constants';


const LocationMain = ({navigation})  => {
    
    const onHandleLocation = async () => {
        const isLocationAllowed = await verifyPermissions();
        if (!isLocationAllowed) return;
        try {
          const location = await Location.getCurrentPositionAsync({
            timeout: 5000,
          });
          const { latitude, longitude } = location.coords;
          const coords = {
            latitude: latitude,
            longitude: longitude,
          };
          navigation.navigate('LocationMap', { coords });
        } catch (error) {
          console.log(error);
          Alert.alert('Error', 'Error al pedir ubicación.');
        }
      };
    

    const verifyPermissions = async () => {
        const {status} = await Location.requestForegroundPermissionsAsync();
        if(status != 'granted')
        {
            Alert.alert("No hay permisos");
            return false;
        }
        return true;
    }

  return (
    <View style={styles.container}>
      <Button color={colors.purple} title='Show me on the map' onPress={onHandleLocation}/>
    </View>
  );
}

export default LocationMain;