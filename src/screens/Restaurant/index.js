import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { Deliveroo } from "../../client";
import { ArrowLeftIcon, MapPinIcon, StarIcon, ChevronRightIcon } from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { Basket, DisheCard } from "../../components";
import { useDispatch } from "react-redux";
import { setGlobalRestaurant } from "../../redux/slices/restaurantSlice";

const Restaurant = () => {

    const { params: { id } } = useRoute()
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [restaurant,setRestaurant] = useState({})

    useEffect(() => {
        const { data, error } = Deliveroo.getRestaurantById({ id })
        if (data) {
            setRestaurant(data)
        }
    })

    useEffect(() => {
        dispatch(setGlobalRestaurant(restaurant))
    }, [dispatch, restaurant])

    return(
        <>
            <Basket/>
            <ScrollView className="bg-gray-100">
                <View className="relative">
                    <Image
                        source={{ uri: restaurant.img }}
                        className="h-48 object-cover"
                    />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute top-8 left-2"
                    >
                        <View className="bg-gray-100 h-9 w-9 justify-center items-center rounded-full">
                            <ArrowLeftIcon size={17.5} color="#00ccbb"/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="p-4 space-y-2 bg-white">
                    <Text className="font-bold text-xl">{restaurant.title}</Text>
                    <View className="flex-row space-x-2 items-center">
                        <StarIcon size={15} color="green" opacity={0.5}/>
                        <Text className="text-xs text-green-900 opacity-50">{restaurant.rating}</Text>
                        <Text className="text-gray-500 text-xs">Offers</Text>
                        <MapPinIcon size={15} color="gray" />
                        <Text className="text-gray-500 text-xs">{restaurant.adress}</Text>
                    </View>
                    <Text className="text-xs text-gray-500">{restaurant.short_description}</Text>
                </View>
                <View className="px-4 py-3 flex-row space-x-2 items-center border-t border-b border-gray-200 bg-white">
                    <QuestionMarkCircleIcon size={20} color={"gray"}/>
                    <Text className="font-bold text-base flex-1">Have a food allergy?</Text>
                    <ChevronRightIcon size={20} color={"#00ccbb"}/>
                </View>
                <View className="p-4">
                    <Text className="font-bold text-base">Menu</Text>
                </View>
                <View className="bg-white mb-28">
                    {
                        restaurant?.dishes?.map(e => <DisheCard key={e.id} item={e}/>)
                    }
                </View>
            </ScrollView>
        </>
    )
}

export { Restaurant };