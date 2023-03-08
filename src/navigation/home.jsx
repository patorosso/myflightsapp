import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SearchFlight } from "../screens/index";
import { colors } from "../constants";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{animation:"fade",headerShown: false}}>
            <Stack.Screen 
            name='Home' component={Home} 
            options={{title: 'MyFlightsApp' ,  
              }}/>
            <Stack.Screen name='SearchFlight' component={SearchFlight} 
            options= {{title:'Search flight' ,headerTintColor: colors.primary,}}/>
            
        </Stack.Navigator>
    )
}

export default HomeNavigator;