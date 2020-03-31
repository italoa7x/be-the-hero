import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const app = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes(){
    return (
        <NavigationContainer>
            <app.Navigator screenOptions={{headerShown: false}}>
                <app.Screen name="Incidents" component={Incidents} />
                <app.Screen name="Detail" component={Detail} />
            </app.Navigator>

        </NavigationContainer>
    );
}