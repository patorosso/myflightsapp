import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { User} from "../screens/index";
import { colors } from "../constants";

const Stack = createNativeStackNavigator();

const UserNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="User">
            <Stack.Screen 
            name='User' component={User} 
            options={{title: 'User', 
                headerStyle: {
                backgroundColor: colors.white,
                },
                headerTintColor: colors.primary,
                
                headerTitleAlign: 'center',
              }}/>
        </Stack.Navigator>
    )
}

export default UserNavigator;