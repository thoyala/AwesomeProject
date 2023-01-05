import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Ex01 from "../screens/week02/Ex01";
import Ex02 from "../screens/week02/Ex02";
import Home from '../screens/week6/Home';
import Travel from '../screens/week3/Travel';
import Resort from '../screens/week4/Resort';
import Health from '../screens/week5/Health';

const Stack = createStackNavigator();

export default function HomeStack() {

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home" }}
            />
            <Stack.Screen
                name="Ex01"
                component={Ex01}
                options={{ title: "Exercise 1" }}
            />
            <Stack.Screen
                name="Ex02"
                component={Ex02}
                options={{ title: "Exercise 2" }}
            />
            <Stack.Screen
                name="Travel"
                component={Travel}
                options={{ title: "Travel" }}
            />
             <Stack.Screen
                name="Resort"
                component={Resort}
                options={{ title: "Resort" }}
            />
             <Stack.Screen
                name="Health"
                component={Health}
                options={{ title:"Health" }}
            />

        </Stack.Navigator>
    );


}
