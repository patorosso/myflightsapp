import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SearchFlight } from "../screens/index";
import { colors } from "../constants";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{animation:"slide_from_right"}}>
            <Stack.Screen 
            name='Home' component={Home} 
            options={{title: 'MyFlightsApp', 
                headerStyle: {
                backgroundColor: colors.white,
                },
                headerTintColor: colors.primary,
                
                headerTitleAlign: 'center',
              }}/>
            <Stack.Screen name='SearchFlight' component={SearchFlight} 
            options= {{headerTintColor: colors.primary,}}/>
            
        </Stack.Navigator>
    )
}

export default HomeNavigator;