import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { selectedRestaurant } from "../../redux/slices/restaurantSlice";
import { XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const Delivery = () => {

    const navigation = useNavigation()
    const restaurant = useSelector(selectedRestaurant)

    return(
        <SafeAreaView className="flex-1 bg-[#00ccbb]">
            <View className="p-4 z-50 space-y-4">
                <View className="flex-row items-center justify-between">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon size={30} color="white"/>
                    </TouchableOpacity>
                    <Text className="font-light text-white text-lg">Order Help</Text>
                </View>
                <View className="bg-white p-5 rounded-md shadow-md z-50 space-y-2">
                    <View className="flex-row items-center">
                        <View className="flex-1 space-y-1">
                            <Text className="text-gray-400 text-lg">Estimated Arrival</Text>
                            <Text className="font-bold text-4xl">45-55 Minutes</Text>
                        </View>
                        <Image
                            source={{ uri: "https://links.papareact.com/fls" }}
                            className="h-20 w-20 p-4 rounded-full"
                        />
                    </View>
                    <Progress.Bar progress={0.3} width={200} indeterminate={true} borderColor="#00ccbb" color="#00ccbb"/>
                    <Text className="text-gray-500">Your order at {restaurant.title} is being prepared.</Text>
                </View>
            </View>
            <View className="flex-1 bg-white -mt-10">
                <MapView
                    className="w-full h-full"
                    initialRegion={{
                        latitude: restaurant.lat,
                        longitude: restaurant.long,
                        latitudeDelta: 0.005,
                        longitudeDelta: 0.005
                    }}
                    mapType="mutedStandard"
                >
                    <Marker
                        coordinate={{
                            latitude: restaurant.lat,
                            longitude: restaurant.long
                        }}
                        title={restaurant.title}
                        description={restaurant.short_description}
                        identifier="origin"
                        pinColor="#00ccbb"
                    />
                </MapView>
            </View>
            <View className="p-4 bg-white flex-row items-center space-x-3">
                <Image
                    source={{ uri: "https://links.papareact.com/wru" }}
                    className="h-12 w-12 p-4 rounded-full bg-gray-300"
                />
                <View className="flex-1">
                    <Text className="text-base font-bold">Omer Akkoca</Text>
                    <Text className="text-gray-400">Your Rider</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-[#00ccbb] font-bold">Call</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export { Delivery };