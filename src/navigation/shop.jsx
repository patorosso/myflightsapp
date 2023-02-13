import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Flights, FlightDetail } from "../screens/index";
import { colors } from "../constants";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name='Home' component={Home} 
            options={{title: 'MyFlightsApp', 
                headerStyle: {
                backgroundColor: colors.primary,
                },
                headerTintColor: colors.white,
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }}/>
            <Stack.Screen name='Flights' component={Flights} />
            <Stack.Screen name='FlightDetail' component={FlightDetail} />
        </Stack.Navigator>
    )
}

export default ShopNavigator;