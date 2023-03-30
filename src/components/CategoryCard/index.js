import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

const CategoryCard = ({ item }) => {

    const navigation = useNavigation()

    return(
        <TouchableOpacity
            onPress={() => navigation.navigate("RestaurantByCategory", { category: item })}
            className="relative rounded-md"
        >
            <Image
                source={{ uri: item?.img }}
                className="h-20 w-20 rounded-md"
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{item.title}</Text>
        </TouchableOpacity>
    )
}

export { CategoryCard };