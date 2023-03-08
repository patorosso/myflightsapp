import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SearchFlight } from "../screens/index";
import { colors } from "../constants";



const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{animation:"fade"}}>
            <Stack.Screen 
            name='Home' component={Home} 
            options={{title: 'MyFlightsApp', 
            headerTintColor: colors.primary, 
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: 'white',},
            navigationBarColor: colors.secondary,
              }}/>
            <Stack.Screen name='SearchFlight' component={SearchFlight} 
            options= {{title:'Search flight' ,headerTintColor: colors.primary}}/>
            
        </Stack.Navigator>
    )
}

export default HomeNavigator;