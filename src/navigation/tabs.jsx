import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants';

import HomeNavigator from './home';

import SettingsNavigator from './settings';


const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        
        tabBarLabelStyle: {
          fontFamily: 'Nunito-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarShowLabel: false,
       tabBarStyle: {backgroundColor: colors.black}
        
      }}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          title: 'none',
          
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={33}
              color={colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SettingsTab"
        component={SettingsNavigator}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused? 'settings' : 'settings-outline' }
              size={33}
              color={colors.primary}
            />
          ),
        }}
      />
      
    </BottomTab.Navigator>
  );
};
  
  

export default Tabs;
