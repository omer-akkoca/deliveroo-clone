import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { selectBasketItems, selectedBasketTotal } from "../../redux/slices/basketSlice";

const Basket = () => {

    const navigation = useNavigation()
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectedBasketTotal)

    if (items.length === 0) return null;

    return(
        <View className="absolute bottom-8 left-0 w-full z-50 px-4">
            <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
                <View className="w-full flex-row items-center justify-between p-3 bg-[#00ccbb] rounded-xl">
                    <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">{items.length}</Text>
                    <Text className="text-white font-extrabold text-lg text-center">View Basket</Text>
                    <Text className="text-lg text-white font-extrabold">{basketTotal.toFixed(2)}₺</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export { Basket };