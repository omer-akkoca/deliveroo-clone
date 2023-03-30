import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TextInput, FlatList } from "react-native";
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";
import { Deliveroo } from "../../client";
import { CategoryCard, FeaturedRows } from "../../components";

const dummy_img = "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg"

const Home = () => {

    const [features,setFeatures] = useState([])
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        const { data, error } = Deliveroo.getAllFeatures()
        const { data: data2, error: error2 } = Deliveroo.getAllCategories()
        if (data2) {
            setCategories(data2)
        }
        if (data) {
            setFeatures(data)
        }
    },[])

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-1 bg-white pt-2">
                
                {/* HEADER */}
                <View className="flex-row items-center mx-4 space-x-2">
                    <Image
                        source={{ uri: "https://links.papareact.com/wru" }}
                        className="h-7 w-7 p-4 rounded-full"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
                        <View className="flex-row items-center space-x-1">
                            <Text className="font-bold text-xl">Current Location</Text>
                            <ChevronDownIcon size={20} color="#00ccbb"/>
                        </View>
                    </View>
                    <UserIcon size={25} color="#00ccbb"/>
                </View>

                <View className="py-1"/>

                {/* SEARCH */}
                <View className="flex-row mx-4 items-center space-x-2 pb-2">
                    <View className="flex-1 flex-row bg-gray-200 items-center p-2 space-x-1">
                        <MagnifyingGlassIcon size={20} color={"gray"}/>
                        <TextInput
                            placeholder="Restaurants and cuisines"
                            className="flex-1 p-0"
                            keyboardType="default"
                        />
                    </View>
                    <AdjustmentsVerticalIcon size={25} color={"#00ccbb"}/>
                </View>

                <ScrollView className="bg-gray-100 pt-2" showsVerticalScrollIndicator={false}>

                    {/* CATEGORIES */}
                    <FlatList
                        horizontal
                        data={categories}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <CategoryCard item={item}/> }
                        ListHeaderComponent={<View className="pl-4"/>}
                        ListFooterComponent={<View className="pr-4"/>}
                        ItemSeparatorComponent={<View className="px-2"/>}
                        showsHorizontalScrollIndicator={false}
                    />

                    <View className="py-2"/>

                    {/* FEATURES ROW */}
                    {
                        features.map(item => (
                            <FeaturedRows
                                key={item._id}
                                id={item._id}
                                title={item.name}
                                description={item.short_description}
                            />
                        ))
                    }

                    <View className="py-2"/>

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export { Home };