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
            headerStyle:{backgroundColor: colors.white,},
            
            
              }}/>
            <Stack.Screen name='SearchFlight' component={SearchFlight} 
            options= {{title:'Search Flight' ,headerTintColor: colors.primary}}/>
            
        </Stack.Navigator>
    )
}

export default HomeNavigator;