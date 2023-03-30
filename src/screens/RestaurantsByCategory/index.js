import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Deliveroo } from "../../client";
import { RestaurantCard } from "../../components";
import { ArrowLeftIcon } from "react-native-heroicons/solid";

const RestaurantByCategory = () => {

    const navigation = useNavigation()
    const { params: { category } } = useRoute()
    const [restaurants,setRestaurants] = useState([])

    useEffect(() => {
        const { data, error } = Deliveroo.getRestaurantByCategory({ category: category.label })
        if (!error) {
            setRestaurants(data)
        }
    }, [])

    return(
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-gray-100">
                <View className="bg-white p-4 flex-row items-center">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeftIcon size={25} color="#00ccbb"/>
                    </TouchableOpacity>
                    <Text className="flex-1 text-center font-bold text-[#00ccbb] text-base tracking-widest">{category.title}</Text>
                </View>
                <FlatList
                    data={restaurants}
                    keyExtractor={(e) => e._id}
                    renderItem={({ item }) => <RestaurantCard item={item} horizontal={false}/>}
                    ItemSeparatorComponent={() => <View className="py-2"/>}
                    ListFooterComponent={() => <View className="py-2"/>}
                    ListHeaderComponent={() => <View className="py-2"/>}
                    className="px-4"
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

export { RestaurantByCategory };