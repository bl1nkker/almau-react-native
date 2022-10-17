import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigation, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import RedCardScreen from './screens/RedCardScreen'
import BlueCardScreen from './screens/BlueCardScreen'
import GreenCardScreen from './screens/GreenCardScreen'

// Screen names
const redCard = 'RedCard'
const blueCard = 'BlueCard'
const greenCard = 'GreenCard'

const Tab = createBottomTabNavigator()

export default function MainContainer({navigation}) {
    return (
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={redCard}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === redCard) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (route.name === blueCard) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    } else if (route.name === greenCard) {
                        iconName = focused ? 'list-circle' : 'list-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
            >
                <Tab.Screen name={redCard} component={RedCardScreen} />
                <Tab.Screen name={blueCard} component={BlueCardScreen} />
                <Tab.Screen name={greenCard} component={GreenCardScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}