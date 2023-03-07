import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../constants';

import HomeNavigator from './home';
import UserNavigator from './user';
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
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
        
      }}>
        <BottomTab.Screen
        name="UserTab"
        component={UserNavigator}
        options={{
          title: 'User',
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name={focused ? 'user' : 'user-o'}
              size={30}
              color={colors.primary}
            />
          ),
        }}
      />
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
            <MaterialCommunityIcons
              name={focused? 'cog' : 'cog-outline' }
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
