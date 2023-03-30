import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, selectBasketItems, selectedBasketTotal } from "../../redux/slices/basketSlice";
import { selectedRestaurant } from "../../redux/slices/restaurantSlice";
import { XCircleIcon } from "react-native-heroicons/solid";

const Basket = () => {

    const navigation = useNavigation()
    const dispatch = useDispatch()
    const restaurant = useSelector(selectedRestaurant)
    const items = useSelector(selectBasketItems)
    const basketTotal = useSelector(selectedBasketTotal)

    const [groupItemsInBasket,setGroupItemsInBasket] = useState([])

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item)
            return results;
        }, {})
        setGroupItemsInBasket(groupedItems)
    }, [items])

    return(
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100 space-y-4">

                <View className="relative py-5 justify-center items-center bg-white rounded-b-3xl">
                    <Text className="font-bold text-xl">Basket</Text>
                    <Text className="font-medium text-xs text-gray-400">{restaurant.title}</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-3 right-4">
                        <XCircleIcon size={50} color="#00ccbb"/>
                    </TouchableOpacity>
                </View>
                
                <View className="bg-white flex-row items-center p-4">
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        className="h-7 w-7 mr-2 rounded-full"
                    />
                    <Text className="flex-1 text-base">Deliver in 50-70 min</Text>
                    <TouchableOpacity>
                        <Text className="text-[#00ccbb] text-xs">Change</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView className="divide-y divide-gray-100">
                    {
                        Object.entries(groupItemsInBasket).map(([key,items]) => (
                            <View key={key} className="bg-white px-4 py-2 flex-row items-center space-x-2">
                                <Text className="text-[#00ccbb]">{items.length} x</Text>
                                <View className="flex-1 flex-row space-x-2 items-center">
                                    <Image
                                        source={{ uri: items[0].img }}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                    <Text className="text-sm">{items[0].title}</Text>
                                </View>
                                <View className="flex-row items-center space-x-2">
                                    <Text className="text-sm">{items[0].price * items.length}₺</Text>
                                    <TouchableOpacity onPress={() => dispatch(removeFromBasket(key))}>
                                        <Text className="text-[#00ccbb] text-xs">Remove</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>

                <View className="bg-white p-4 rounded-t-3xl">
                    <View className="flex-row mb-2">
                        <Text className="flex-1 text-gray-400 text-sm">Subtotal</Text>
                        <Text className="text-gray-400 text-sm">{basketTotal}₺</Text>
                    </View>
                    <View className="flex-row mb-2">
                        <Text className="flex-1 text-gray-400 text-sm">Subtotal</Text>
                        <Text className="text-gray-400 text-sm">{5.90}₺</Text>
                    </View>
                    <View className="flex-row mb-4">
                        <Text className="flex-1 text-sm">Order Total</Text>
                        <Text className="text-sm">{(basketTotal+5.90).toFixed(2)}₺</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("PreparingOrder")} className="p-4 bg-[#00ccbb] rounded-lg">
                        <Text className="font-bold text-base text-center text-white">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export { Basket };