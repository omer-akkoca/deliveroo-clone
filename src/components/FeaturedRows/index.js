import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { Deliveroo } from "../../client";
import { RestaurantCard } from "../RestaurantCard";

const FeaturedRows = ({ id, title, description }) => {

    const [restaurants,setRestaurants] = useState([])

    useEffect(() => {
        const { data: featured } = Deliveroo.getFeaturedById({ id })
        const data = Deliveroo.getRestaurantForFeatured({ restaurants: featured.restaurants })
        if (data) {
            setRestaurants(data)
        }
    }, [])

    return(
        <View className="mb-2">
            <View className="flex-row items-center justify-between px-4">
                <Text className="text-lg font-bold">{title}</Text>
                <ArrowRightIcon size={20} color="#00ccbb"/>
            </View>
            <Text className="text-xs text-gray-500 pb-3 px-4">{description}</Text>
            <FlatList
                data={restaurants}
                keyExtractor={(e) => e._id}
                renderItem={({item}) => <RestaurantCard item={item} />}
                horizontal
                ListHeaderComponent={<View className="pl-4"/>}
                ListFooterComponent={<View className="pr-4"/>}
                ItemSeparatorComponent={<View className="px-2"/>}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export { FeaturedRows };