import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Animatable from 'react-native-animatable';
import { ORDER_LOADING } from "../../../assets"
import * as Progress from 'react-native-progress';
import { useNavigation } from "@react-navigation/native";

const PreparingOrder = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 4000);
    }, [])

    return(
        <SafeAreaView className="flex-1 bg-[#00ccbb] justify-center items-center">
            <Animatable.Image
                source={ORDER_LOADING}
                className="h-96 w-96"
                iterationCount={1}
                animation="slideInUp"
            />
            <Animatable.Text
                animation={"slideInUp"}
                iterationCount={1}
                className="text-lg my-5 text-white font-bold text-center"
            >
                Waiting for restaurant to accept your order!
            </Animatable.Text>
            <Animatable.View
                animation={"slideInUp"}
                iterationCount={1}
            >
                <Progress.Circle size={60} indeterminate={true} color="white" />
            </Animatable.View>
        </SafeAreaView>
    )
}

export { PreparingOrder };