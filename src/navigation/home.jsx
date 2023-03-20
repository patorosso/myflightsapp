import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SearchFlight, FlightMap, History, Schedule } from "../screens/index";
import { colors } from "../constants";
import { useSelector } from "react-redux";



const Stack = createNativeStackNavigator();


const HomeNavigator = () => {
    const flightId = useSelector((state) => state.flight.flightId);
    
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{animation:"fade"}}>
            <Stack.Screen 
            name='Home' component={Home} 
            options={{title: 'MyFlightsApp', 
            headerTintColor: colors.primary, 
            headerTitleAlign: 'center',
            headerStyle:{backgroundColor: colors.white,},
              }}/>
              
            <Stack.Screen name='SearchFlight' component={SearchFlight} 
            options= {{title:'Search Flight' ,headerTintColor: colors.primary}}/>

            <Stack.Screen name='FlightMap' component={FlightMap} 
            options= {{ title:`Flight Map - ${flightId}`  ,headerTintColor: colors.primary}}/>

            <Stack.Screen name='History' component={History} 
            options= {{title:'Flight History' ,headerTintColor: colors.primary}}/>

            <Stack.Screen name='Schedule' component={Schedule} 
            options= {{title:'Schedule' ,headerTintColor: colors.primary}}/>
            
        </Stack.Navigator>
    )
}

export default HomeNavigator;