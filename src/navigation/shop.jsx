import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Flights, FlightDetail } from "../screens/index";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name='Home' component={Home} 
            options={{headerShown: false, title: 'Home'}}/>
            <Stack.Screen name='Flights' component={Flights} />
            <Stack.Screen name='FlightDetail' component={FlightDetail} />
        </Stack.Navigator>
    )
}

export default ShopNavigator;