import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from './styles';
import AppNavigator from './navigation';

const App = () => {
  
  const [loaded] = useFonts({
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
  });


  if(!loaded)
  return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color= '#0000ff'/>
    </View>
  )

  return (
    <AppNavigator />
    
  );
}

export default App;
