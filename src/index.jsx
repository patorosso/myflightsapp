import { View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { styles } from './styles';
import store from './store';
import { Provider } from 'react-redux';
import AppNavigator from './navigation';

const App = () => {
  
  const [loaded] = useFonts({
    'Nunito-Bold': require('../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-Medium': require('../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-Regular': require('../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Italic': require('../assets/fonts/Nunito-Italic.ttf'),
  });


  if(!loaded)
  return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size='large' color= '#0000ff'/>
    </View>
  )

  return (
    
      <Provider store={store}>
      <AppNavigator />
      </Provider>
    
    
    
    
  );
}

export default App;
