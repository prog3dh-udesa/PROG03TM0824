import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome from '@expo/vector-icons/FontAwesome';

import Home from '../screens/Home'
import Profile from '../screens/Profile'
import NewPost from '../screens/NewPost';
const Tab = createBottomTabNavigator()


export default class NavegacionAnidada extends Component {
  render() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name='home' component={Home} 
            options={{
                headerShown: false,
                tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />
                }}/>
            <Tab.Screen name='profile' component={Profile}  options={{headerShown: false}}/>
            <Tab.Screen name='newpost' component={NewPost}  options={{headerShown: false}}/>
        </Tab.Navigator>
    )
  }
}