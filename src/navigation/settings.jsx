import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Settings} from "../screens/index";
import { colors } from "../constants";

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Settings">
            <Stack.Screen 
            name='Home' component={Settings} 
            options={{title: 'Settings', 
                headerStyle: {
                backgroundColor: colors.white,
                },
                headerTintColor: colors.primary,
                
                headerTitleAlign: 'center',
              }}/>
        </Stack.Navigator>
    )
}

export default SettingsNavigator;