import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Flights, FlightDetail } from "../screens/index";
import { colors } from "../constants";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name='Home' component={Home} 
            options={{title: 'MyFlightsApp', 
                headerStyle: {
                backgroundColor: colors.white,
                },
                headerTintColor: colors.primary,
                
                headerTitleAlign: 'center',
              }}/>
            <Stack.Screen name='Flights' component={Flights} 
            options= {{headerTintColor: colors.primary,}}/>
            <Stack.Screen name='FlightDetail' component={FlightDetail}
            options= {{headerTintColor: colors.primary,}} />
        </Stack.Navigator>
    )
}

export default HomeNavigator;