import React from "react";
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from "@react-navigation/stack";
import { Easing } from 'react-native';
import Visitors from '../Screens/VisitorsList';
import RegisterForm from '../Screens/RegisterForm';

const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const closeConfig = {
    animation: 'timing',
    config: {
        duration: 500,
        easing: Easing.linear
    }
}

const StackNavigator = () => {
    return (
       
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    transitionSpec: {
                        open: config,
                        close: closeConfig
                    }
                }}
            >
                <Stack.Screen
                    name="Visitors"
                    component={Visitors}
                    options={{
                        title: 'Visitors',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterForm}
                    options={{
                        title: 'Visitors',
                        headerShown: false,
                    }}
                />

            </Stack.Navigator>
      
    );
}

export { StackNavigator };