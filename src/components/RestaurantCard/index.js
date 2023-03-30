import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

const RestaurantCard = ({ item, horizontal = true }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate("Restaurant", { id: item._id })} className="bg-white rounded-md overflow-hidden shadow-sm">
            <Image
                source={{ uri: item.img }}
                className={`${horizontal ? "w-56 h-32" : "w-full h-48"} object-cover`}
            />
            <View className="p-2">
                <Text className="text-base font-bold pb-1">{item.title}</Text>
                <View className="flex-row space-x-1 items-center">
                    <StarIcon size={15} color="green" opacity={0.5}/>
                    <Text className="text-xs text-green-900 opacity-50">{item.rating}</Text>
                    <Text className="text-gray-400 text-xs">Offers</Text>
                </View>
                <View className="flex-row space-x-1 items-center">
                    <MapPinIcon size={15} color="gray" />
                    <Text className="text-gray-400 text-xs">{item.adress}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export { RestaurantCard };