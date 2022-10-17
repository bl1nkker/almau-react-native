import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigation, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import InDevelopmentScreen from './screens/InDevelopmentScreen'
import ProfileScreen from './screens/ProfileScreen'
import CoffeeScreen from './screens/CoffeeScreen'

// Screen names
const firstTab = 'In Development'
const secondTab = 'Coffee'
const thirdTab = 'Profile'

const Tab = createBottomTabNavigator()

export default function MainContainer({navigation}) {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={firstTab}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === firstTab) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    } else if (route.name === secondTab) {
                        iconName = focused ? 'heart' : 'heart-outline'
                    } else if (route.name === thirdTab) {
                        iconName = focused ? 'person' : 'person-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            >
                <Tab.Screen name={firstTab} component={InDevelopmentScreen} />
                <Tab.Screen name={secondTab} component={CoffeeScreen} />
                <Tab.Screen name={thirdTab} component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}