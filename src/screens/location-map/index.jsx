import { View} from 'react-native';
import MapView , {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import { styles } from './styles';



const LocationMap = ({route,navigation})  => {
  
  const coords = {
    latitude: route.params.coords.latitude,
    longitude: route.params.coords.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };


  return (
    <View style={styles.container}>
        <MapView 
            rotateEnabled={false}
            initialRegion={coords}
            toolbarEnabled={false}
            loadingEnabled={true}
            provider="google" style={styles.map}>

                <Marker coordinate={coords}/>

            </MapView>
    </View>
  );
}

export default LocationMap;