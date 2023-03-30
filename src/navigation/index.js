import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Restaurant, Basket, PreparingOrder, Delivery, RestaurantByCategory } from "../screens";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Restaurant" component={Restaurant}/>
                <Stack.Screen
                    name="Basket" component={Basket}
                    options={{ presentation: "modal" }}
                />
                <Stack.Screen
                    name="PreparingOrder" component={PreparingOrder}
                    options={{ presentation: "fullScreenModal" }}
                />
                <Stack.Screen name="Delivery" component={Delivery}/>
                <Stack.Screen name="RestaurantByCategory" component={RestaurantByCategory}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;